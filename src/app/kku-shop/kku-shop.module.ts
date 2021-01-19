import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopDisplayComponent } from './shop-display/shop-display.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { KkuSharedModule } from '../kku-shared/kku-shared.module';
import { CartWidgetComponent } from './cart/cart-widget/cart-widget.component';

@NgModule({
  declarations: [
    ShopDisplayComponent,
    ProductComponent,
    CartComponent,
    CartWidgetComponent,
  ],
  exports: [ShopDisplayComponent, CartComponent, CartWidgetComponent],
  imports: [CommonModule, KkuSharedModule],
})
export class KkuShopModule {}
