import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReviewService } from '../review.service';
import { ReviewModel } from '../reviews/reviews.model';

@Component({ 
  selector: 'app-update-review',
  templateUrl: './update-review.component.html',
  styleUrls: ['./update-review.component.css']
})
export class UpdateReviewComponent implements OnInit {
 
  reviewItem = new ReviewModel("","",[],"","");

  constructor(private reviewService: ReviewService, private _router: Router) { }

  ngOnInit(): void {
    let reviewId = localStorage.getItem("updateReviewId");
    this.reviewService.getReview(reviewId)
    .subscribe((data)=>{
      this.reviewItem = JSON.parse(JSON.stringify(data)); //stringify = convert from object to JSON ; parse = convert from JSON to object
      console.log(this.reviewItem);
    })
  }

  updateReview(){
    this.reviewService.updateReview(this.reviewItem);
    alert("success");
    this._router.navigate(['/reviews']);
  }

}
