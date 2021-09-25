import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CarsComponent } from './cars/cars.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule , HTTP_INTERCEPTORS} from '@angular/common/http';
import { UpdateCarComponent } from './update-car/update-car.component';
import { UpdateReviewComponent } from './update-review/update-review.component';
import { NewCarComponent } from './new-car/new-car.component';
import { NewReviewComponent } from './new-review/new-review.component';
import { SinglecarComponent } from './singlecar/singlecar.component';
import { SinglereviewComponent } from './singlereview/singlereview.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { AuthService } from './auth.service';
import { CarService } from './car.service';
import { ReviewService } from './review.service';
import { TokenInterceptorService } from './token-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarsComponent,
    ReviewsComponent,
    HomeComponent,
    UpdateCarComponent,
    UpdateReviewComponent,
    NewCarComponent,
    NewReviewComponent,
    SinglecarComponent,
    SinglereviewComponent,
    SignupComponent,
    LoginComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [CarService, ReviewService, AuthService,
             {
              provide : HTTP_INTERCEPTORS,
              useClass : TokenInterceptorService,
              multi : true
             }],
  bootstrap: [AppComponent]
})
export class AppModule { }
