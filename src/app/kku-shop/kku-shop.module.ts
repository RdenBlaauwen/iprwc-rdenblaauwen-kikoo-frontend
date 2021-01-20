import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopDisplayComponent } from './shop-display/shop-display.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { KkuSharedModule } from '../kku-shared/kku-shared.module';
import { CartWidgetComponent } from './cart/cart-widget/cart-widget.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { KkuCustomerModule } from '../kku-customer/kku-customer.module';

@NgModule({
  declarations: [
    ShopDisplayComponent,
    ProductComponent,
    CartComponent,
    CartWidgetComponent,
    CheckoutComponent,
  ],
  exports: [ShopDisplayComponent, CartComponent, CartWidgetComponent],
  imports: [CommonModule, KkuSharedModule, KkuCustomerModule],
})
export class KkuShopModule {}
