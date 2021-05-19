
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account.component';
import { ProfileComponent } from './profile/profile.component';
import { OrdersComponent } from './orders/orders.component';
import { CustomersComponent } from './customers/customers.component';
import { MessagesComponent } from './messages/messages.component';
import { PointsComponent } from './points/points.component';
import { BidComponent } from './bid/bid.component';

const routes: Routes = [
  { 
    path: '', 
    component: AccountComponent,
    children: [
      { path: '', redirectTo: 'profile', pathMatch: 'full'},
      { path: 'profile', component: ProfileComponent },
      { path: 'orders', component: OrdersComponent },
      { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },
      // { 
      //   path: 'products', 
      //   component: ProductsComponent,
      //   children: [
      //     { path: '', component: ProductListComponent },
      //     { path: 'add', component: AddProductComponent }
      //   ]
      // },
      { path: 'customers', component: CustomersComponent },
      { path: 'messages', component: MessagesComponent },
      { path: 'points', component: PointsComponent },
      { path: 'bid', component: BidComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountRoutingModule { }
