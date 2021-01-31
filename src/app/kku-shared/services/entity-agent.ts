import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { map, last } from 'rxjs/operators';
import * as R from 'ramda';
import { AnyObject, BackendEntity } from '../models/types';
import { OperationState } from './operation-state';
import { environment } from 'src/environments/environment';

const setPropsTo = function (original: AnyObject, newProps: AnyObject) {
  Object.keys(newProps).forEach((propName: string) => {
    original[propName] = newProps[propName];
  });
  return original;
};

/**
 * generic wrapper for a list of objects of and entity type
 * communicates with API
 */
export class EntityAgent<F, B extends BackendEntity> {
  public uri: string;

  public entities: BehaviorSubject<B[]> = new BehaviorSubject<B[]>([]);
  public state: BehaviorSubject<OperationState> = new BehaviorSubject<OperationState>(
    OperationState.IDLE
  );

  private get authToken(): string | null {
    return localStorage.getItem('kku-token');
  }

  private get headers(): HttpHeaders {
    let headers = new HttpHeaders();

    if (this.authToken) {
      headers = headers.set('Authorization', 'Bearer ' + this.authToken);
    }

    return headers;
  }

  constructor(
    private http: HttpClient,
    path: string,
    public eager: boolean = false,
    private fixer: (value: B) => B = (el) => {
      return el;
    }
  ) {
    this.uri = `${environment.API_URL}/${path}`;
    this.eager && this.retrieve();
  }

  public findByPk(id: string): Observable<B | undefined> {
    const entities = this.entities.value;

    const observable = new Observable<B | undefined>((subscriber) => {
      if (entities.length === 0) {
        this.retrieve().subscribe(() => {
          subscriber.next(this.findByPkSync(id));
        });
      } else {
        subscriber.next(this.findByPkSync(id));
      }
    });

    return observable;
  }

  public findByPkSync(id: string): B | undefined {
    const entities = this.entities.value;
    return entities.find((entity) => {
      return entity.id === id;
    });
  }

  public retrieve(): Subject<B[]> {
    this.state.next(OperationState.IN_PROGRESS);
    const subject = new Subject<B[]>();

    this.http
      .get<B[]>(this.uri, {
        headers: this.headers,
      })
      .pipe(
        map((entities: B[]) => {
          return entities.map(this.fixer);
        })
      )
      .subscribe(subject);

    subject.subscribe((entity) => {
      this.state.next(OperationState.LOADED);
      this.entities.next(entity);
    });

    return subject;
  }

  public add(entity: F): Subject<B> {
    this.state.next(OperationState.IN_PROGRESS);
    const subject = new Subject<B>();

    this.http
      .post<B>(this.uri, entity, {
        headers: this.headers,
      })
      .pipe(map(this.fixer))
      .subscribe(subject);

    subject.subscribe((entity) => {
      this.state.next(OperationState.SUCCESS);
      const entityList = this.entities.value;
      entityList.push(entity);
      this.entities.next(entityList);
    });

    return subject;
  }

  public update(entity: F): Subject<B> {
    this.state.next(OperationState.IN_PROGRESS);
    const subject = new Subject<B>();

    this.http
      .patch<B>(this.uri, entity, {
        headers: this.headers,
      })
      .pipe(map(this.fixer))
      .subscribe(subject);

    subject.subscribe((newEntity: B) => {
      this.state.next(OperationState.SUCCESS);
      const entityList = this.entities.value;
      const entity = entityList.find((entity) => {
        return entity.id === newEntity.id;
      });

      // if entity already present in store,
      // set existing entities' equal to backend entities'
      // otherwise, add anyways (should never happen)
      if (entity) {
        setPropsTo(entity, newEntity);
      } else {
        //TODO: consider throwing error instead.
        entityList.push(newEntity);
      }
      this.entities.next(entityList);
    });

    return subject;
  }

  public delete(entity: B): Subject<any> {
    this.state.next(OperationState.IN_PROGRESS);
    const uri = `${this.uri}/${entity.id}`;
    const subject = new Subject<any>();

    this.http
      .delete(uri, {
        headers: this.headers,
      })
      .subscribe(subject);

    subject.subscribe(() => {
      this.state.next(OperationState.SUCCESS);
      let entityList = this.entities.value;
      entityList = R.without([entity], entityList);
      this.entities.next(entityList);
    });

    return subject;
  }
}
