import {Component, OnInit} from '@angular/core';
import {ValidateService} from '../../services/validate.service';
import {AuthService} from '../../services/auth.service';

import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name: String;
  username: String;
  email: String;
  password: String;


  // injecting the services
  constructor(private validateService: ValidateService,
             // private flashMessage: FlashMessagesService,
              private authService: AuthService,
              private router: Router) {
  }

  ngOnInit() {
  }

  onRegisterSubmit() {
    const user = {
      name: this.name,
      email: this.email,
      username: this.username,
      password: this.password
    };
    // required
    if (!this.validateService.validateRegister(user)) {
      //this.flashMessage.show('Please fill in all fields', {cssClass: 'alert-danger', timeout: 3000});
      alert("Please fill in all fields");
      return false;

    }
    // Validate Email
    if (!this.validateService.validateEmail(user.email)) {
        alert("Please use a valid email");
      //this.flashMessage.show('Please use a valid email', {cssClass: 'alert-danger', timeout: 3000});
      return false;
    }

    // Register user
    this.authService.updateDetails(user).subscribe(data => {
      if (data.success) {
        window.alert("User registered successfully!");
        this.router.navigate(['/home']);
      } else {
        this.router.navigate(['/register']);
        window.alert("Something wrong! Please enter details again!");
      }
    });
  }

}

