import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopDisplayComponent } from './shop-display/shop-display.component';

@NgModule({
  declarations: [ShopDisplayComponent],
  exports: [ShopDisplayComponent],
  imports: [CommonModule],
})
export class KkuShopModule {}
