import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AuthorsComponent } from './authors/authors.component';
import { BooksComponent } from './books/books.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NewAuthorComponent } from './new-review/new-review.component';
import { NewBookComponent } from './new-car/new-car.component';
import { SignupComponent } from './signup/signup.component';
import { SingleauthorComponent } from './singlereview/singleauthor.component';
import { SinglebookComponent } from './singlecar/singlebook.component';
import { UpdateAuthorComponent } from './update-review/update-review.component';
import { UpdateBookComponent } from './update-car/update-book.component'


const routes: Routes = [
  {path: '' , 
  component: HomeComponent},

  {path: 'signup',
  component: SignupComponent},

  {path: 'login', 
  component: LoginComponent},

  {path: 'cars' ,
  component: BooksComponent},

  {path: 'newcar' , 
  component: NewBookComponent},

  {path: 'singlecar',
  component: SinglebookComponent},

  {path: 'updatebook',
  component: UpdateBookComponent},
  
  {path: 'authors' , 
  component: AuthorsComponent},

  {path: 'newauthor' , 
  canActivate : [AuthGuard],
  component: NewAuthorComponent},

  {path: 'updateauthor',
  canActivate : [AuthGuard],
  component: UpdateAuthorComponent},

  {path: 'singleauthor',
  component: SingleauthorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
