import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrdersComponent } from './orders/orders.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [DashboardComponent, OrdersComponent],
  exports: [DashboardComponent],
  imports: [CommonModule, RouterModule],
})
export class KkuDashboardModule {}
