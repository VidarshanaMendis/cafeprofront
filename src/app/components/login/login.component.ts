import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
//import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: String;
  password: String;


  //injecting services to the constructor
  constructor(private authService: AuthService,
              private router: Router) {
  }

  ngOnInit() {
  }

  onLoginSubmit() {


    // login credentials
    const user = {
      username: this.username,
      password: this.password
    };

    this.authService.authenticateUser(user).subscribe(data => {   // using the auth service to authenticate


      if (data.success) {
        this.authService.storeUserData(data.token, data.user);

        if(data.user.username=="admin"){
          this.router.navigate(['adminhome']);
          console.log(data.user);
        }else{
          this.router.navigate(['home']);  // navigate to the home
          console.log(data.user);
          //window.alert("User authenticated successfully!");

        }


      } else {

        this.router.navigate(['login']);    // navigate to the login if no match
          window.alert("username or password incorrect!");
      }
    });
  }

}
