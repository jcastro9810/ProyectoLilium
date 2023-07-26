import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ProductsAComponent } from './components/products-a/products-a.component';
import { ProductsBComponent } from './components/products-b/products-b.component';
import { OffersComponent } from './components/offers/offers.component';
import { CartComponent } from './components/cart/cart.component';
import { UsersComponent } from './components/users/users.component';
import { ProductsComponent } from './components/products/products.component';
import { LoginComponent } from './components/login/login.component';
import { CarritoComponent } from './components/carrito/carrito.component';

const routes: Routes = [
  {path:"", redirectTo:"/home",pathMatch:"full"},
  {path:"home",component:HomeComponent, pathMatch:"full"},
  {path:"registration",component:RegistrationComponent, pathMatch:"full"},
  {path:"productsA",component:ProductsAComponent, pathMatch:"full"},
  {path:"productsB",component:ProductsBComponent, pathMatch:"full"},
  {path:"offers",component:OffersComponent, pathMatch:"full"},
  {path:"cart",component:CartComponent, pathMatch:"full"},
  {path:"users",component:UsersComponent, pathMatch:"full"},
  {path:"products",component:ProductsComponent, pathMatch:"full"},
  {path:"carrito",component:CarritoComponent, pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
