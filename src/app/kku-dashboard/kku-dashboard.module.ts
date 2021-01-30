import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrdersComponent } from './orders/orders.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CustomersComponent } from './customers/customers.component';

@NgModule({
  declarations: [DashboardComponent, OrdersComponent, CustomersComponent],
  exports: [DashboardComponent],
  imports: [CommonModule, RouterModule, FormsModule, FontAwesomeModule],
})
export class KkuDashboardModule {}
