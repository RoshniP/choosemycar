import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarService } from '../car.service';
import { CarModel } from '../cars/cars.model';
declare var $: any;

@Component({
  selector: 'app-new-car',
  templateUrl: './new-car.component.html',
  styleUrls: ['./new-car.component.css'] 
})
export class NewCarComponent implements OnInit {

  constructor(private carService: CarService , private _router: Router) { }

  carItem = new CarModel("","",[],"","");

  ngOnInit(): void {$('.select-picker').selectpicker();}
  
  AddCar(){
    this.carService.newCar(this.carItem);
    console.log("added");
    alert("success");
    this._router.navigate(['/cars']); 
  }
}
