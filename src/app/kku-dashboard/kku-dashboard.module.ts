import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrdersComponent } from './orders/orders.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [DashboardComponent, OrdersComponent],
  exports: [DashboardComponent],
  imports: [CommonModule, RouterModule, FormsModule, FontAwesomeModule],
})
export class KkuDashboardModule {}
