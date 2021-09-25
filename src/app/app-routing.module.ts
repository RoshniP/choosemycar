import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { ReviewsComponent } from './reviews/reviews.component';
import { CarsComponent } from './cars/cars.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NewReviewComponent } from './new-review/new-review.component';
import { NewCarComponent } from './new-car/new-car.component';
import { SignupComponent } from './signup/signup.component';
import { SinglereviewComponent } from './singlereview/singlereview.component';
import { SinglecarComponent } from './singlecar/singlecar.component';
import { UpdateReviewComponent } from './update-review/update-review.component';
import { UpdateCarComponent } from './update-car/update-car.component'


const routes: Routes = [
  {path: '' , 
  component: HomeComponent},

  {path: 'signup',
  component: SignupComponent},

  {path: 'login', 
  component: LoginComponent},

  {path: 'cars' ,
  component: CarsComponent},

  {path: 'newcar' , 
  component: NewCarComponent},

  {path: 'singlecar',
  component: SinglecarComponent},

  {path: 'updatecar',
  component: UpdateCarComponent},
  
  {path: 'reviews' , 
  component: ReviewsComponent},

  {path: 'newreview' , 
  canActivate : [AuthGuard],
  component: NewReviewComponent},

  {path: 'updatereview',
  canActivate : [AuthGuard],
  component: UpdateReviewComponent},

  {path: 'singlereview',
  component: SinglereviewComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
