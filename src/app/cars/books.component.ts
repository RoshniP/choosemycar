import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { CarService } from '../car.service';
import { CarModel } from './cars.model';

@Component({ 
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  cars : CarModel[] = [];

  constructor(private carService: CarService ,public _auth: AuthService, private _router: Router) { }

  ngOnInit(): void {
    this.carService.getCars() 
    .subscribe((data)=>{
      this.cars = JSON.parse(JSON.stringify(data));
    })
  }
  
  singleCar(car: any){
    localStorage.setItem("singleCarId" , car._id.toString());
    this._router.navigate(['/singlecar']);
  }

  updateCar(car:any){
    localStorage.setItem("updateCarId" , car._id.toString());
    this._router.navigate(['/updatecar']);
  }

  deleteCar(car: any){
    this.carService.deleteCar(car._id)
    .subscribe((data)=>{
      this.cars = this.cars.filter(b => b !== car);  //deletes product from list (line 14) and shows the list of products that is != the deleted product
    })
  }
}
 