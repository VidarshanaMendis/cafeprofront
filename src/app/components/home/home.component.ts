import { Component, OnInit } from '@angular/core';
import { RestaurantdataService } from '../../services/restaurantdata.service';
import {AuthService} from '../../services/auth.service';
import {getType} from "@angular/core/src/errors";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  searchcategory: String;
  keyword: String;
  msg: String;
  lis: Object[];

  constructor(
  private restaurantdata: RestaurantdataService,
  private authService:AuthService
  ) {}

  ngOnInit() {
  }
  restaurantSearch(){
    console.log("restaurant search called");
    const restaurant = {
      searchcategory: this.searchcategory,
      keyword: this.keyword
    };
    console.log(restaurant.keyword);
    console.log(restaurant.searchcategory);
    var data: Object;
    switch(this.searchcategory){
      case "Name":{
        data = {restname:restaurant.keyword};
        //data = {name:restaurant.keyword};
        this.restaurantdata.searchByName(data).subscribe(res => {
          this.lis = res.restaurant;
          if (this.lis.length == 0){
            this.msg = "No Available restaurants for your search";
            console.log("no data received");
          }else{
            this.msg = "We found "+this.lis.length+" restaurants containing "+restaurant.keyword;
            console.log("data received");
            console.log(res.restaurant);
          }
        });
        break;

      }
      case "City":{
        data = {city:restaurant.keyword};

        this.restaurantdata.searchByCity(data).subscribe(res => {
          this.lis = res.restaurant;
          if (this.lis.length == 0){
            this.msg = "No Available restaurants for your search";
            console.log("no data received");
          }else{
            this.msg = "We found "+this.lis.length+" restaurants containing "+restaurant.keyword;
            console.log("data received");
            console.log(res.restaurant);
          }
        });
        break;

      }

    }

  }

}
