import {Component, Input, OnInit,Inject} from '@angular/core';
import { RestaurantdataService } from '../../services/restaurantdata.service';
import {AuthService} from '../../services/auth.service';
import { ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  id: String;
  restaurant:any;
  users: String[];
  lastcommentnew:any;
  comments: String[];
  user: any;
  count:any;
  rating:any;
  temprate:any;

  constructor(  private restaurantdata: RestaurantdataService,
                private authservice:AuthService,
                private acrouter: ActivatedRoute,
                private router: Router,
                ) {

    this.id = acrouter.snapshot.params['_id'];
    console.log("restaurant id :"+ this.id);

    restaurantdata.searchById({id:this.id}).subscribe(res=> {

      this.restaurant = res.restaurant;
      this.comments = res.restaurant.comments;
      this.users = Object.keys(this.comments);
      this.rating = res.restaurant.rating;
      //this.count = res.restaurant.count;


      this.temprate = 0;


    } );


    //console.log(this.comments);
    this.user = JSON.parse(localStorage.getItem("user")); //user
    console.log(this.user);


  }


  ngOnInit() {
  }

  saveComment() {
    //alert(this.count);
    console.log("saveComment called");
   // document.getElementById("commentdiv").style.display = "none";
    this.lastcommentnew=((<HTMLInputElement>document.getElementById("InputMessage")).value);
    this.restaurant.lastcomment=this.lastcommentnew;



    if(this.restaurant.comments==null){
      alert("no comments");
      this.restaurant.comments = {};
      this.users = [];
      this.restaurant.comments[this.user.username] = {"comment":((<HTMLInputElement>document.getElementById("InputMessage")).value)};

      this.users.push(this.user.username);
      this.restaurantdata.saveComment(this.restaurant).subscribe(res=>{
        if (res.state){
          alert("data updated");
          console.log("new comment saved");
        }else{
          alert("data not updated");
          console.log("comment not saved");
        }
      });
    }else{
      this.restaurant.comments[this.user.username] = {"comment":((<HTMLInputElement>document.getElementById("InputMessage")).value)};
      this.users.push(this.user.username);
      this.restaurantdata.saveComment(this.restaurant).subscribe(res=>{
        if (res.state){
          alert("Comment saved");
          //window.location.reload();
          console.log("new comment saved");
        }else{
          alert("data not updated");
          console.log("comment not saved");
        }
      });
    }
    window.location.reload();
  }
  leaveReviewAlert(){
    window.alert("Please login first!");

  }
  calculateRating(){
    var totalvalue=0;
    var finalrating;
    for(var i=0;i<this.users.length;i++){
        totalvalue=totalvalue+this.restaurant.comments[i].rate;
    }
    finalrating=totalvalue/this.users.length;
    return finalrating;
  }

}
