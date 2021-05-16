import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { ProductCardComponent } from './product-card/product-card.component';
import { MatCardModule } from '@angular/material/card';
import { ProductGridListComponent } from './product-grid-list/product-grid-list.component';
import { CatalogCardComponent } from './catalog-card/catalog-card.component';
import { StarRatingComponent } from './star-rating/star-rating.component'; 

const components = [
  ProductCardComponent,
  ProductGridListComponent,
  CatalogCardComponent,
  StarRatingComponent,
]

@NgModule({
  declarations: [
    ...components,
    
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
  ],
  exports: [
    ...components
  ]
})
export class BidshidoCommonModule { }
