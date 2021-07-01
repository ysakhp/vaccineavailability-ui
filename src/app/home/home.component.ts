import { Component, OnInit } from '@angular/core';

import { NotificationService } from '../service/notification.service';
import { Router } from '@angular/router';
import { Notification } from '../model/notification';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  notifications !: Notification[]
  
  ageGroupHasError: boolean = false
  constructor(private notificationService: NotificationService, private router: Router) { }

  ngOnInit(): void {
    
    this.notificationService.getNotificationDetails().subscribe(
      data => {
        
        this.notifications = data;
      },
      error => {
        // console.log("Error")
      }
    )
    
  }

  navigateNotify() {
    // console.log("NOtify")
    this.router.navigate(['/createnotify'])
  }

}
