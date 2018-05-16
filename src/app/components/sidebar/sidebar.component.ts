import {Component, OnInit} from '@angular/core';
import { RestaurantdataService } from '../../services/restaurantdata.service';
import {Router} from '@angular/router';




@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

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
    this.restauranrservice.deleteRestaurant(index).subscribe(
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
