import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { BackendUser, FrontendUser } from '../models/user';
import { EntityAgent } from './entity-agent';
import {
  KkuNotification,
  Status,
  NotificationService,
  Duration,
} from './notification.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public agent: EntityAgent<FrontendUser, BackendUser>;

  constructor(
    private http: HttpClient,
    private notificationService: NotificationService
  ) {
    this.agent = new EntityAgent<FrontendUser, BackendUser>(http, 'user');
  }

  public add(user: FrontendUser): Subject<BackendUser> {
    const notification = this.notificationService.create(
      'Gebruiker aan het opslaan...',
      Status.PROCESSING
    );

    const subject = this.agent.add(user);

    subject.subscribe({
      next: (user) => {
        notification.update(
          `Gebruiker '${user.username}' aangemaakt!`,
          Status.SUCCESS,
          Duration.SHORT
        );
      },
    });
    return subject;
  }
}
