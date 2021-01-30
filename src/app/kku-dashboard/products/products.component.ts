import { Component } from '@angular/core';
import * as R from 'ramda';
import {
  faPencilAlt,
  faTrash,
  faPlus,
  faSave,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import { ProductService } from 'src/app/kku-shared/services/product.service';
import { BehaviorSubject } from 'rxjs';
import {
  BackendProduct,
  FrontendProduct,
} from 'src/app/kku-shared/models/product';

@Component({
  selector: 'kku-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  public faPencilAlt = faPencilAlt;
  public faTrash = faTrash;
  public faPlus = faPlus;
  public faSave = faSave;
  public faTimes = faTimes;

  public get products(): BehaviorSubject<BackendProduct[]> {
    return this.service.agent.entities;
  }

  public productBeingCreated?: FrontendProduct;
  private productBeingEdited?: BackendProduct;

  constructor(private service: ProductService) {}

  public swapIfEdited(product: BackendProduct): BackendProduct {
    if (this.beingEdited(product) && this.productBeingEdited) {
      return this.productBeingEdited;
    }
    return product;
  }

  public beingEdited(product: BackendProduct): boolean {
    if (this.productBeingEdited && this.productBeingEdited.id === product.id) {
      return true;
    }
    return false;
  }

  public onStartCreate(): void {
    this.productBeingCreated = new FrontendProduct();
  }
  public onFinishCreate(): void {
    if (!this.productBeingCreated) {
      return;
    }
    this.service.add(this.productBeingCreated).subscribe(() => {
      this.productBeingCreated = undefined;
    });
  }
  public onCancelCreate(): void {
    this.productBeingCreated = undefined;
  }

  public onEdit(product: BackendProduct): void {
    if (this.productBeingEdited && this.productBeingEdited.id === product.id) {
      this.service.update(this.productBeingEdited).subscribe(() => {
        this.productBeingEdited = undefined;
      });
      return;
    }
    this.productBeingEdited = R.clone(product);
  }

  public onDelete(product: BackendProduct): void {
    this.service.delete(product);
  }
}
