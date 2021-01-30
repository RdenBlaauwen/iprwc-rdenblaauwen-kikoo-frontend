import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrdersComponent } from './orders/orders.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CustomersComponent } from './customers/customers.component';
import { ProductsComponent } from './products/products.component';

@NgModule({
  declarations: [DashboardComponent, OrdersComponent, CustomersComponent, ProductsComponent],
  exports: [DashboardComponent],
  imports: [CommonModule, RouterModule, FormsModule, FontAwesomeModule],
})
export class KkuDashboardModule {}
