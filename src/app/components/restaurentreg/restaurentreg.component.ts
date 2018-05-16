import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {RestaurantService} from '../../services/restaurant.service';

@Component({
  selector: 'app-restaurentreg',
  templateUrl: './restaurentreg.component.html',
  styleUrls: ['./restaurentreg.component.css']
})
export class RestaurentregComponent implements OnInit {

  restname:String;
  city:String;
  address:String;
  website:String;
  telephone:String;
  openinghours:String;
  imagelink:String;

  constructor(private router:Router,

              private restaurantService:RestaurantService
            ) { }

  ngOnInit() {
  }

  onRegisterSubmit(){
    console.log("register called");
    const restaurant={
      restname:this.restname,
      city:this.city,
      address:this.address,
      website:this.website,
      telephone:this.telephone,
      openinghours:this.openinghours,
      imagelink:this.imagelink,
      approve:false,
      reject:false
    };
    this.restaurantService.registerRestaurant(restaurant).subscribe(data => {
      console.log(data);
      if (data.success) {
        window.alert("Restaurant is registered successfully");

        this.router.navigate(['/home']);
      } else {
        window.alert("Something went wrong..");

        this.router.navigate(['/restaurentreg']);
      }
    });
  }

}
