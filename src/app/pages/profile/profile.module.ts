import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { BidshidoCommonModule } from 'src/app/components/bidshido-common.module';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ListingsComponent } from './listings/listings.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { MatTabsModule } from '@angular/material/tabs'; 
import { MatMenuModule } from '@angular/material/menu'; 

@NgModule({
  declarations: [
    ProfileComponent, 
    ListingsComponent, 
    ReviewsComponent
  ],
  imports: [
    CommonModule,
    BidshidoCommonModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatTabsModule,
    MatMenuModule,
    MatListModule,
    MatDividerModule,
    ProfileRoutingModule,
  ]
})
export class ProfileModule { }
