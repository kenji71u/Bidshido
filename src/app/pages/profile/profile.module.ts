import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { BidshidoCommonModule } from 'src/app/components/bidshido-common.module';


@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    BidshidoCommonModule,
    MatFormFieldModule,
    MatInputModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
