import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';


@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    HomeComponent,
    ProductsComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
