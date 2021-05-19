import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

import { ProductCardComponent } from './product-card/product-card.component';
import { MatCardModule } from '@angular/material/card';
import { ProductGridListComponent } from './product-grid-list/product-grid-list.component';
import { CatalogCardComponent } from './catalog-card/catalog-card.component';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { CommentItemComponent } from './comment-item/comment-item.component';
import { CommentListComponent } from './comment-list/comment-list.component';
import { ProductImageGalleryComponent } from './product-image-gallery/product-image-gallery.component'; 
import { MatRippleModule } from '@angular/material/core';
import { UserInfoComponent, UserExtraInfo } from './user-info/user-info.component';
import { ProfileHeaderComponent } from './profile-header/profile-header.component';

const components = [
  ProductCardComponent,
  ProductGridListComponent,
  CatalogCardComponent,
  StarRatingComponent,
  CommentItemComponent,
  CommentListComponent,
  ProductImageGalleryComponent,
  UserInfoComponent,
  UserExtraInfo,
  ProfileHeaderComponent,
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
    RouterModule,
    MatRippleModule
  ],
  exports: [
    ...components
  ]
})
export class BidshidoCommonModule { }
