import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { RestService } from './rest.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  alert : boolean = false

  constructor(private router : Router,private cookieService: CookieService,private restService: RestService) { }

  registerUser(user:User){
     
    // return  this.http.post<any>(this.APIURL + '/users/register', user)
    return this.restService.post(user,'/users/register')
  }

  loginUser(user:User){

    // return  this.http.post<any>(this.APIURL + '/authentication', user)
    return this.restService.post(user,'/authentication')
  }

  isLoggedIn(){
    return !! this.cookieService.get('token')
  }

  getToken(){
    return this.cookieService.get('token')
  }

  logoutUser(){
    this.cookieService.deleteAll('token')
    this.cookieService.deleteAll('user')
    this.router.navigate(['login'])
  }

  setSuccess(status: boolean){
    this.alert= status
  }

  getSuccess() : boolean {
    return this.alert
  }

  sendMail(emailAddress: String){
    // qry : String ='emailAddress/'+emailAddress
    console.log("Email sending "+emailAddress)
    return this.restService.post(emailAddress,'/users/otp')
  }

  resetPassword(user: User){
    console.log("user service ")
    return this.restService.post(user,'/users/resetpassword')
  }
}
