import { OrdersComponent } from './orders/orders.component';
import { MatTabsModule } from '@angular/material/tabs';
import { CustomersComponent } from './customers/customers.component';
import { ProfileComponent } from './profile/profile.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './account.component';
import { BidshidoCommonModule } from 'src/app/components/bidshido-common.module';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { CustomerListTableComponent } from './customers/customer-list-table/customer-list-table.component';
import { OrderListTableComponent } from './orders/order-list-table/order-list-table.component';

@NgModule({
  declarations: [
    AccountComponent, 
    ProfileComponent,
    CustomersComponent,
    CustomerListTableComponent,
    OrderListTableComponent,
    OrdersComponent,
  ],
  imports: [
    CommonModule,
    BidshidoCommonModule,
    AccountRoutingModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    MatTableModule,
  ]
})
export class AccountModule { }
