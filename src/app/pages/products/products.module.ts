import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { BidshidoCommonModule } from 'src/app/components/bidshido-common.module';

@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    CommonModule,
    BidshidoCommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
