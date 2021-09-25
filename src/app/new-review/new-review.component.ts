import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReviewService } from '../review.service';
import { ReviewModel } from '../reviews/reviews.model';

@Component({
  selector: 'app-new-review',
  templateUrl: './new-review.component.html',
  styleUrls: ['./new-review.component.css']
})
export class NewReviewComponent implements OnInit {

  reviewItem = new ReviewModel("","",[],"","");

  constructor(private reviewService: ReviewService, private _router: Router) { }

  ngOnInit(): void {
  }
  
  AddReview(){
    this.reviewService.newReview(this.reviewItem);
    console.log("added");
    alert("success");
    this._router.navigate(['/reviews']); 
  }
}
