import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
}) 
export class CarService { 

  constructor(private http: HttpClient) { }

  getCars(){
    return this.http.get("https://car-server1.herokuapp.com/cars");
  }
  
  getCar(id:any){        //for edit car page
    return this.http.get("https://car-server1.herokuapp.com/car/"+id)
  }

  newCar(item: any){
    return this.http.post("https://car-server1.herokuapp.com/insertcar", {"car" : item})
    .subscribe(data => {console.log(data)})
  }

  updateCar(car: any){
    return this.http.put("https://car-server1.herokuapp.com/updatecar", car)
    .subscribe((data)=>{console.log(data)})
  }

  deleteCar(id: any){
    return this.http.delete("https://car-server1.herokuapp.com/removecar/"+id);
  }
}
 