import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReviewService } from '../review.service';
import { ReviewModel } from '../reviews/reviews.model';

@Component({
  selector: 'app-singlereview',
  templateUrl: './singlereview.component.html',
  styleUrls: ['./singlereview.component.css']
})
export class SinglereviewComponent implements OnInit {

  reviewItem = new ReviewModel("","",[],"","");

  constructor(private reviewService: ReviewService, private _router: Router) { }

  ngOnInit(): void {
    let reviewId = localStorage.getItem("singleReviewId");
    this.reviewService.getReview(reviewId)
    .subscribe((data)=>{
      this.reviewItem = JSON.parse(JSON.stringify(data)); //stringify = convert from object to JSON ; parse = convert from JSON to object
      console.log(this.reviewItem);
    })
  }

}
