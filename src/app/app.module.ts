import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KkuShopModule } from './kku-shop-module/kku-shop.module';
import { KkuCommonModule } from './kku-common/kku-common.module';
import { KkuDashboardModule } from './kku-dashboard/kku-dashboard.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    KkuShopModule,
    KkuCommonModule,
    KkuDashboardModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
