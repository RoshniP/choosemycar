import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { ReviewService } from '../review.service';
import { ReviewModel } from './review.model';
 
@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  reviews : ReviewModel[] = []; 

  constructor(private reviewService : ReviewService ,public _auth: AuthService, private _router: Router) { }

  ngOnInit(): void {
    this.reviewService.getReviews()
    .subscribe((data)=>{
      this.reviews = JSON.parse(JSON.stringify(data));
    })
  }

  singleReview(review: any){
    localStorage.setItem("singleReviewId" , review._id.toString());
    this._router.navigate(['/singlereview']);
  }

  updateReview(review: any){
    localStorage.setItem("updateReviewId" , review._id.toString());
    this._router.navigate(['/updatereview']);
  }

  deleteReview(review: any){
    this.reviewService.deleteReview(review._id)
    .subscribe((data)=>{
      this.reviews = this.reviews.filter(a => a !== review);  //deletes product from list (line 14) and shows the list of products that is != the deleted product
    })
  }
}
