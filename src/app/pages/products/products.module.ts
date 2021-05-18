import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { BidshidoCommonModule } from 'src/app/components/bidshido-common.module';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { MatButtonModule } from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductDetailComponent,
  ],
  imports: [
    CommonModule,
    BidshidoCommonModule,
    ProductsRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
  ]
})
export class ProductsModule { }
