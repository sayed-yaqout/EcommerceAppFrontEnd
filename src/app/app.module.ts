import { ProductService } from './adminServices/product.service';
import { HelpComponent } from './help/help.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { GeneralHomeComponent } from './general-home/general-home.component';
import { RouterModule ,Routes} from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { ProductUpdateComponent } from './admin-products/product-update/product-update.component';
import { HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {AppUserRoutingModule} from './app-userRouting.modules'

import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import {AdminProfileComponent} from './admin-profile/admin-profile.component';
import {AdminOrdersComponent} from './admin-orders/admin-orders.component';

import{ UserHomeComponent } from './user-home/user-home.component';
import {AddToCartComponent} from './add-to-cart/add-to-cart.component';
import {OrderHistoryComponent} from './order-history/order-history.component';
import {UserProfileComponent} from './user-profile/user-profile.component';


const routes:Routes = [
  {path:'',component:GeneralHomeComponent},
  {path:'signIn',component:SignInComponent},
  {path:'signUp',component:SignUpComponent},
  {path:'help',component:HelpComponent},
]


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    GeneralHomeComponent,
    SignUpComponent,
    SignInComponent,
    AddProductComponent,
    EditProductComponent,
    AdminProductsComponent,
    ProductUpdateComponent,
    AdminDashboardComponent,
    AdminProfileComponent,
    AdminOrdersComponent,
    UserHomeComponent,
    AddToCartComponent,
    UserProfileComponent,
    OrderHistoryComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    AppRoutingModule,
    //AppUserRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
