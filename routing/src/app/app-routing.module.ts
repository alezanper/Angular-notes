import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes),
    CommonModule],
  exports: [RouterModule]

})
export class AppRoutingModule { }