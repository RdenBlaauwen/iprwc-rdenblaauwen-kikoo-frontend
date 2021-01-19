import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopDisplayComponent } from './shop-display/shop-display.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { KkuSharedModule } from '../kku-shared/kku-shared.module';

@NgModule({
  declarations: [ShopDisplayComponent, ProductComponent, CartComponent],
  exports: [ShopDisplayComponent, CartComponent],
  imports: [CommonModule, KkuSharedModule],
})
export class KkuShopModule {}
