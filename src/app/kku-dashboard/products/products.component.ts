import { Component } from '@angular/core';
import * as R from 'ramda';
import { faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons';
import { ProductService } from 'src/app/kku-shared/services/product.service';
import { BehaviorSubject } from 'rxjs';
import { BackendProduct } from 'src/app/kku-shared/models/product';

@Component({
  selector: 'kku-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  public faPencilAlt = faPencilAlt;
  public faTrash = faTrash;

  public get products(): BehaviorSubject<BackendProduct[]> {
    return this.service.agent.entities;
  }

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
