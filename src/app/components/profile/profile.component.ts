import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {ValidateService} from '../../services/validate.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: any;

  name: String;
  username: String;
  email: String;
  //password: String;

  constructor(private authService: AuthService,
              private validateService: ValidateService,
              private router: Router) {
  }

  ngOnInit() {
    this.authService.getProfile().subscribe(profile => {
        this.user = profile.user;
        console.log(this.user);
      },
      err => {
        console.log(err);
        return false;
      });
  }

  updateDetails() {
    const user = {
      _id:this.user._id,
      name:((<HTMLInputElement>document.getElementById("exampleInputName")).value),
      email:((<HTMLInputElement>document.getElementById("exampleInputEmail1")).value),
      username:((<HTMLInputElement>document.getElementById("exampleInputLastName")).value),
    };
    // required
    /**if (!this.validateService.validateRegister(user)) {
      //this.flashMessage.show('Please fill in all fields', {cssClass: 'alert-danger', timeout: 3000});
      alert("Please fill in all fields");
      return false;

    }
    // Validate Email
    if (!this.validateService.validateEmail(user.email)) {

      //this.flashMessage.show('Please use a valid email', {cssClass: 'alert-danger', timeout: 3000});
      alert("Please use a valid email");
      return false;
    }**/

    // Register user
    this.authService.updateDetails(user).subscribe(data => {
      console.log(user);
      if (data.success) {
        window.alert("Details upadated successfully!");
        this.router.navigate(['/home']);
      } else {
        this.router.navigate(['/profile']);
        window.alert("Something wrong! Please enter details again!");
      }
    });
  }

}
