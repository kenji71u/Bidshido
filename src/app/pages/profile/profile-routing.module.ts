import { ReviewsComponent } from './reviews/reviews.component';
import { ListingsComponent } from './listings/listings.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from 'src/app/components/not-found/not-found.component';
import { ProfileComponent } from './profile.component';

const routes: Routes = [
  { path: '', component: NotFoundComponent },
  { 
    path: '', 
    component: ProfileComponent,
    children: [
      { path: ':profileId', redirectTo: ':profileId/listings', pathMatch: 'full' },
      { path: ':profileId/listings', component: ListingsComponent },
      { path: ':profileId/reviews', component: ReviewsComponent },
    ]
  }
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
