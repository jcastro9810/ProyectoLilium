import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { UsersComponent } from './components/users/users.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { ProductsAComponent } from './components/products-a/products-a.component';
import { ProductsBComponent } from './components/products-b/products-b.component';
import { OffersComponent } from './components/offers/offers.component';
import { CartComponent } from './components/cart/cart.component';
import { MessagesComponent } from './components/messages/messages.component';
import { HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { MenuComponent } from './components/menu/menu.component';
import { ProductsComponent } from './components/products/products.component'
import { InterceptorService } from './interceptor/interceptor.service';
import { CarritoComponent } from './components/carrito/carrito.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    UsersComponent,
    RegistrationComponent,
    LoginComponent,
    ProductsAComponent,
    ProductsBComponent,
    OffersComponent,
    CartComponent,
    MessagesComponent,
    MenuComponent,
    ProductsComponent,
    CarritoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass:InterceptorService,
      multi: true,

    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
