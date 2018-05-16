import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-restaurantcard',
  templateUrl: './restaurantcard.component.html',
  styleUrls: ['./restaurantcard.component.css']
})
export class RestaurantcardComponent implements OnInit {

@Input()Restaurant:Object;
  constructor() { }

  ngOnInit() {
  }

}
