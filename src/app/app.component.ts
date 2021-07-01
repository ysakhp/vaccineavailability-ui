import { Component } from '@angular/core';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'vaccineavailability';

  userService : UserService;

  constructor(userService : UserService){
    this.userService = userService
  }
}
