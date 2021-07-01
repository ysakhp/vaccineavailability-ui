import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  alert: boolean = false
  error : boolean = false
  userModel = new User();

  constructor(private userService: UserService, private router: Router, private cookieService: CookieService) { }

  ngOnInit(): void {
    this.alert = this.userService.getSuccess()
  }

  onSubmit() {



    this.userService.loginUser(this.userModel)
      .subscribe(data => {
        this.error = false
        // this.alert = true
        // localStorage.setItem('token',data.token)
        this.cookieService.set('token', data.token, 1)
        this.cookieService.set('user', data.user, 1)

        this.router.navigate(['/home'])
      },

        error => {
          this.error = true
          this.alert = false
        }
      )

  }

  closeAlert() {
    this.alert = false
  }

  closeError(){
    this.error = false
  }
}
