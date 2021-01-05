import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KkuShopModule } from './kku-shop-module/kku-shop.module';
import { KkuDashboardModule } from './kku-dashboard/kku-dashboard.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    KkuShopModule,
    KkuDashboardModule,
    HttpClientModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
