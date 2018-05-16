import { Component, OnInit } from '@angular/core';
import { RestaurantdataService } from '../../services/restaurantdata.service';

@Component({
  selector: 'app-tobeapprovedrestaurants',
  templateUrl: './tobeapprovedrestaurants.component.html',
  styleUrls: ['./tobeapprovedrestaurants.component.css']
})
export class TobeapprovedrestaurantsComponent implements OnInit {

  restauranrservice:RestaurantdataService;
  restaurants:Object[];

  constructor(private restaurant:RestaurantdataService){

    this.restauranrservice=restaurant;
    this.getRes({approve:false});
  }


  ngOnInit() {

  }
  deleteRestaurant(index) {
    console.log(index);
    console.log(index);
    const data={
      _id:index
    }
    this.restauranrservice.deleteRestaurant(data).subscribe(
      data => {
        this.getRes({approve:false});
      }, error => {
        alert('database error');
        //console.log(JSON.stringify(error.json()));
      });
  }

  approveRestaurant(index) {
    console.log(index);
    const data={
      _id:index
    }
    this.restauranrservice.approveRestaurant(data).subscribe(
      data => {
        this.getRes({approve:false});
      }, error => {
        alert('database error');
        // console.log(JSON.stringify(error.json()));
      });
  }

  getRes(ff) {
    this.restauranrservice.getRestaurants(ff).subscribe(
      daa => {
        this.restaurants = daa.restaurant;

        console.log("restaurants data received");
        console.log(daa);
      }, error => {
        alert('database error getres');
        //console.log(JSON.stringify(error.json()));
      });
  }



}
