import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerAddFormComponent } from './customer-add-form/customer-add-form.component';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderComponent } from './order/order.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';

const mesRoutes = [
  {path :'', component : CustomerListComponent},
  {path :'customers', component : CustomerListComponent},
  {path :'orders', component : OrderListComponent},
  {path :'about', component : AboutComponent},
  {path :'login', component : LoginComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CustomerListComponent,
    CustomerComponent,
    CustomerAddFormComponent,
    OrderListComponent,
    OrderComponent,
    AboutComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(mesRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
