import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopDisplayComponent } from './shop-display/shop-display.component';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [ShopDisplayComponent, ProductComponent],
  exports: [ShopDisplayComponent],
  imports: [CommonModule],
})
export class KkuShopModule {}
