import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor(private http: HttpClient) { }

  getReviews(){ 
    return this.http.get("https://car-server1.herokuapp.com/reviews");
  }
 
  getReview(id: any){         //for edit review page
    return this.http.get("https://car-server1.herokuapp.com/review/"+id);
  }
  
  newReview(item: any){
    return this.http.post("https://car-server1.herokuapp.com/insertreview", {"review" : item})
    .subscribe(data => {console.log(data)})
  }

  updateReview(review: any){
    return this.http.put("https://car-server1.herokuapp.com/updatereview", review)
    .subscribe((data)=>{console.log(data)})
  }

  deleteReview(id: any){
    return this.http.delete("https://car-server1.herokuapp.com/removereview/"+id);
  }
}
