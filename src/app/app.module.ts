import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShopDisplayComponent } from './shop-display/shop-display.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductService } from './services/product.service';

@NgModule({
  declarations: [AppComponent, ShopDisplayComponent, DashboardComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [ProductService],
  bootstrap: [AppComponent],
})
export class AppModule {}
