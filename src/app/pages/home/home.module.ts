import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BidshidoCommonModule } from '../../components/bidshido-common.module';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HomeSectionComponent } from './home-section/home-section.component';

@NgModule({
  declarations: [
    HomeComponent,
    HomeSectionComponent,
  ],
  imports: [
    CommonModule,
    BidshidoCommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
