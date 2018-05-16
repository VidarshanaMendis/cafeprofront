import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {

  registerres:Boolean;
  //approverstaurant:Boolean;
  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
  }

  onLogoutClick() {
    this.authService.logout();

    this.router.navigate(['/login']);
    return false;
  }
  approverestaurants(){
    //this.approverstaurant=true;
    this.registerres=false;

  }

  registerrestaurants(){
    this.registerres=true;
    //this.approverstaurant=false;

  }
  getregisterres(){
    return this.registerres;
  }



}
