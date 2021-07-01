import { Injectable } from '@angular/core';

import { Router } from '@angular/router';
import { Notification } from '../model/notification';
import { CookieService } from 'ngx-cookie-service';
import { RestService } from './rest.service';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  //readonly APIURL = "http://www.vaccinationnotification.online:8081/api"; 
  readonly APIURL = "http://127.0.0.1:8081/api"; 

  constructor(private restService : RestService,private router : Router,private cookieService: CookieService) { }


  addNotification(notification: Notification){

    // return  this.http.post<any>(this.APIURL + '/users/createnotify', notification)
return this.restService.post(notification,'/users/createnotify')
  }

  getNotificationDetails(){
    // return this.http.get<Notification[]>(this.APIURL+'/users/notifyByUserId/'+this.cookieService.get('user'))
    return this.restService.get('/users/notifyByUserId/'+this.cookieService.get('user'))
  }

}
