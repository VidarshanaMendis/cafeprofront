import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class RestaurantService {

  constructor(private http: Http) { }

 /** registerRestaurant(restaurant) {

    const headers =  new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/restaurants/restaurantregister', restaurant, {headers: headers}).map((res: any) => res.json);

  }**/
  registerRestaurant(restaurant) {
    console.log(restaurant);
    return this.http.post('http://localhost:3000/restaurants/restaurantregister',restaurant).map((res:any) => res);
  }

}
