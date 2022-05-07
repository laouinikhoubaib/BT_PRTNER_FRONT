import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { Router } from '@angular/router';

import { Trip } from 'src/Models/Trip';

import { TripService } from '../service/trip.service';
@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.scss']
})
export class TripComponent implements OnInit {
 
  Trips!: Trip[];
  trip!:Trip ;

  constructor( private Tripservice:TripService,private router:Router){}

  ngOnInit(): void {
    this.trip=new Trip();
  }
SaveTrip(){
/* this.Tripservice.createData(this.trip).subscribe(data =>{
   console.log(data);
 },
 error=>console.log(error));*/
 this.Tripservice.createData(this.trip).subscribe (res => {
  console.log('Trip created!');
  this.router.navigateByUrl('/complaint');})
  ;
 

 }

  

onSubmit(){
 // this.trip=value;
   console.log((this.trip));
  this.SaveTrip();

}
}
