import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class RestaurantdataService {
  restaurant: any;

  constructor(private http: HttpClient) {
  }

  searchByName(name) {
    console.log("search by name called")
    console.log(name);
    return this.http.post('http://localhost:3000/restaurants/name', name).map((res: any) => res);
  }

  searchByCity(city) {
    console.log("search by city called")
    console.log(city);
    return this.http.post('http://localhost:3000/restaurants/city', city).map((res: any) => res);
  }


  searchById(id) {
    return this.http.post('http://localhost:3000/restaurants/id', id).map((res: any) => res);
  }

  saveComment(restaurant) {
    return this.http.post('http://localhost:3000/restaurants/savecommentnew',restaurant).map((res:any) => res);
  }
  deleteRestaurant(id){
    return this.http.post('http://localhost:3000/restaurants/deleterestaurant',id).map((res:any) => res);
  }
  getRestaurants(restaurant) {
    return this.http.post('http://localhost:3000/restaurants/getrestaurants',restaurant ).map((res: any) => res);
  }

  approveRestaurant(restaurant) {
    return this.http.post('http://localhost:3000/restaurants/approverestaurants',restaurant ).map((res: any) => res);
  }

}
