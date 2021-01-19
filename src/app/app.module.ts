import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { KkuRoutingModule } from './kku-shared/kku-routing.module';
import { AppComponent } from './app.component';
import { KkuShopModule } from './kku-shop/kku-shop.module';
import { KkuDashboardModule } from './kku-dashboard/kku-dashboard.module';
import { HttpClientModule } from '@angular/common/http';
import { KkuCustomerModule } from './kku-customer/kku-customer.module';
import { KkuSharedModule } from './kku-shared/kku-shared.module';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    KkuRoutingModule,
    KkuShopModule,
    KkuDashboardModule,
    HttpClientModule,
    KkuCustomerModule,
    KkuSharedModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
