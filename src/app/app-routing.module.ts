import { EditProductComponent } from './edit-product/edit-product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminOrdersComponent } from './admin-orders/admin-orders.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';

import { UserProfileComponent } from './user-profile/user-profile.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { UserHomeComponent} from "./user-home/user-home.component";
import { AddToCartComponent} from "./add-to-cart/add-to-cart.component"


const routes: Routes = [
{
    path: 'AdminDashboardComponent', component: AdminDashboardComponent,
    children: [
      {
        path: 'AdminOrdersComponent', component: AdminOrdersComponent
      },
      {
        path: 'adminProfile', component: AdminProfileComponent
      },
      {
        path : 'adminProducts' ,component: AdminProductsComponent
      }
      ,
      {
        path : 'adminAddProducts' ,component: AddProductComponent
      },
      {
        path : 'adminEditProducts' ,component: EditProductComponent
      }
      ]
      },
      {
        path:'admin', redirectTo: '/AdminDashboardComponent/adminProfile', pathMatch: 'full'
      }
      ];

      const routes2: Routes = [
        {
            path: 'UserPage', component: UserHomeComponent,
            children: [
              {
                path: 'OrdersComponent', component: OrderHistoryComponent
              },
              {
                path: 'Profile', component: UserProfileComponent
              },
              ,
              {
                path : 'Cart' ,component: AddToCartComponent
              },
              ]
              },
              {
                path:'user', redirectTo: '/UserPage/profile', pathMatch: 'full'
              }
              ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



