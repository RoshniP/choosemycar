import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BooksComponent } from './books/books.component';
import { AuthorsComponent } from './authors/authors.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule , HTTP_INTERCEPTORS} from '@angular/common/http';
import { UpdateBookComponent } from './update-car/update-book.component';
import { UpdateAuthorComponent } from './update-review/update-review.component';
import { NewBookComponent } from './new-car/new-car.component';
import { NewAuthorComponent } from './new-review/new-review.component';
import { SinglebookComponent } from './singlecar/singlebook.component';
import { SingleauthorComponent } from './singlereview/singleauthor.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { AuthService } from './auth.service';
import { BookService } from './car.service';
import { AuthorService } from './review.service';
import { TokenInterceptorService } from './token-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BooksComponent,
    AuthorsComponent,
    HomeComponent,
    UpdateBookComponent,
    UpdateAuthorComponent,
    NewBookComponent,
    NewAuthorComponent,
    SinglebookComponent,
    SingleauthorComponent,
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
  providers: [BookService, AuthorService, AuthService,
             {
              provide : HTTP_INTERCEPTORS,
              useClass : TokenInterceptorService,
              multi : true
             }],
  bootstrap: [AppComponent]
})
export class AppModule { }
