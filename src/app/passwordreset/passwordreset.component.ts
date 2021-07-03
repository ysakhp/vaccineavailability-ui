import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-passwordreset',
  templateUrl: './passwordreset.component.html',
  styleUrls: ['./passwordreset.component.css']
})
export class PasswordresetComponent implements OnInit {

  emailAddress !: any
  alert: boolean = false
  error: boolean = false
  confirmpassword: any
  userModel = new User()

  constructor(private userService: UserService) { }

  ngOnInit(): void {

  }

  onSubmit() {

    if (localStorage.getItem('emailId') != null) {
      this.emailAddress = localStorage.getItem('emailId')
      this.userModel.email = this.emailAddress
      localStorage.removeItem('emailId')


      this.userService.resetPassword(this.userModel).subscribe(
        data => {
          console.log("Success " + data.status)
          this.alert = true
          this.error = false
        },
        err => {
          this.alert = false
          this.error = true
        }
      )

    } else {
      this.error = true;
      this.alert = false;
    }



  }

  closeError() {
    this.error = false
  }

  closeAlert() {
    this.alert = false
  }
}
