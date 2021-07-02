import { Component, OnInit } from '@angular/core';
import { Notification } from '../model/notification';
import { CookieService } from 'ngx-cookie-service';
import { NotificationService } from '../service/notification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createnotify',
  templateUrl: './createnotify.component.html',
  styleUrls: ['./createnotify.component.css']
})
export class CreatenotifyComponent implements OnInit {
  notificationModel = new Notification()
  alert: boolean = false
  ageGroupHasError: boolean = true
  constructor(private cookieService: CookieService, private notifyService: NotificationService, private router: Router) { }

  ngOnInit(): void {
    this.ageGroupHasError= true
  }

  onSubmit() {

    this.notificationModel.user.id = this.cookieService.get('user')
    this.notifyService.addNotification(this.notificationModel)
      .subscribe(data => {
        this.alert = true
        // this.router.navigate(['/home'])
      }
        ,
        error => {
          this.alert = false

        }


      )

  }

  validateAgeGroup(value: number) {

    if (value == 0) {
console.log("zero ")
      this.ageGroupHasError = true;
    } else {
      console.log("not zero ")
      this.ageGroupHasError = false;
    }

  }

  closeAlert(){
    this.alert = false
  }

}
