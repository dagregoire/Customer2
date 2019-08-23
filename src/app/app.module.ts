import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataorderService } from './dataorder.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AlertMsgDirective } from './alert-msg.directive';
import { DatacustomerService } from './datacustomer.service';
import { CustomerMenuComponent } from './customer-menu/customer-menu.component';
import { CustomerCardViewComponent } from './customer-card-view/customer-card-view.component';
import { CustomerMapComponent } from './customer-map/customer-map.component';
import { CustomerMenuEditComponent } from './customer-menu-edit/customer-menu-edit.component';


const mesRoutes:Routes = [
  {path :'', component : CustomerListComponent},
  {path :'customers', component : CustomerListComponent},
  {path :'orders', component : OrderListComponent},
  {path :'about', component : AboutComponent},
  {path :'login', component : LoginComponent},
  {path :'customers/:id/edit', component :CustomerAddFormComponent}
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
    LoginComponent,
    AlertMsgDirective,
    CustomerMenuComponent,
    CustomerCardViewComponent,
    CustomerMapComponent,
    CustomerMenuEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    RouterModule.forRoot(mesRoutes)
  ],
  providers: [DataorderService,DatacustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
