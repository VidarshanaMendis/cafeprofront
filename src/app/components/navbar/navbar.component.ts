import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  username:any;

  constructor(private authService: AuthService,
              private router: Router) {
  }

  ngOnInit() {

  }

  onLogoutClick() {
    this.authService.logout();

    this.router.navigate(['/login']);
    return false;
  }
  onRegisterRestaurant(){
    if(this.authService.loggedIn()){
      this.router.navigate(['/restaurentreg']);
    }else{
      window.alert("Login to the system!");
      this.router.navigate(['/login']);
    }
  }

  IsloggedIn(){
    if(this.authService.loggedIn()){
      this.username=this.authService.getUserName();
      return true;
    }else{
      this.username=null;
      return false;
    }

  }


}
