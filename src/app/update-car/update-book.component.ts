import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarService } from '../car.service';
import { CarModel } from '../cars/cars.model';

@Component({
  selector: 'app-update-car',
  templateUrl: './update-car.component.html',
  styleUrls: ['./update-car.component.css']
})
export class UpdateCarComponent implements OnInit {

  carItem = new CarModel("","",[],"","");

  constructor(private carService: CarService, private _router: Router) { } 

  ngOnInit(): void {
    let carId = localStorage.getItem("updateCarId");
    this.carService.getCar(carId)
    .subscribe((data)=>{
      this.carItem = JSON.parse(JSON.stringify(data)); //stringify = convert from object to JSON ; parse = convert from JSON to object
      console.log(this.carItem);
    })
  }

  updateCar(){
    this.carService.updateCar(this.carItem);
    alert("success");
    this._router.navigate(['/cars']);
  }
}
