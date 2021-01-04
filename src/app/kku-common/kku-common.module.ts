import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from './services/product.service';
import { Customer } from './models/customer';
import { Order } from './models/order';
import { Product } from './models/product';
import { User } from './models/user';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [CommonModule, HttpClientModule],
})
export class KkuCommonModule {}
