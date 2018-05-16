import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {HomeComponent} from './components/home/home.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {ProfileComponent} from './components/profile/profile.component';

import {ValidateService} from './services/validate.service';
import {AuthService} from './services/auth.service';
import {FlashMessagesModule} from 'angular2-flash-messages';
import {HttpModule} from '@angular/http';
import {AuthGuard} from './guards/auth.guard';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MainComponent } from './components/main/main.component';
import { SearchpageComponent } from './components/searchpage/searchpage.component';
import { RestaurentregComponent } from './components/restaurentreg/restaurentreg.component';
import { RatingcomComponent } from './components/ratingcom/ratingcom.component';
import { RestaurantcardComponent } from './components/restaurantcard/restaurantcard.component';
import {RestaurantService} from './services/restaurant.service';
import {RestaurantdataService} from './services/restaurantdata.service';
import { CommentsComponent } from './components/comments/comments.component';
import { FooterComponent } from './components/footer/footer.component';
import { AdminhomeComponent } from './components/adminhome/adminhome.component';
import { TobeapprovedrestaurantsComponent } from './components/tobeapprovedrestaurants/tobeapprovedrestaurants.component';
import { AdminrestaurantregisterComponent } from './components/adminrestaurantregister/adminrestaurantregister.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  //{path: 'restaurantcard', component: RestaurantcardComponent},
  {path: 'searchpage', component: SearchpageComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'navbar', component: NavbarComponent},
  {path: 'restaurentreg', component: RestaurentregComponent},
  {path: 'main', component: MainComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'sidebar', component: SidebarComponent},
  {path: 'comments/:_id', component: CommentsComponent},
  {path: 'adminhome', component: AdminhomeComponent,canActivate:[AuthGuard]},
  {path: 'profile', component: ProfileComponent},
  {path: 'adminrestaurantregister', component: AdminrestaurantregisterComponent}
 // {path: 'dashboard', component: MainComponent, canActivate: [AuthGuard], children :[
  //    {path: '', component: DashboardComponent},
  //    {path: 'profile', component: ProfileComponent},
   //   {path: 'register', component: RegisterComponent}
     // ]}  // should be protected
  // {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]}       // should be protected
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    ProfileComponent,
    SidebarComponent,
    MainComponent,
    SearchpageComponent,
    RestaurentregComponent,
    RatingcomComponent,
    RestaurantcardComponent,
    CommentsComponent,
    FooterComponent,
    AdminhomeComponent,
    TobeapprovedrestaurantsComponent,
    AdminrestaurantregisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule.forRoot()

  ],
  providers: [ValidateService, AuthService, AuthGuard,RestaurantService,RestaurantdataService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
