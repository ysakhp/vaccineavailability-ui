import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-generate-otp',
  templateUrl: './generate-otp.component.html',
  styleUrls: ['./generate-otp.component.css']
})
export class GenerateOtpComponent implements OnInit {


  emailAddress !: string
  // alert: boolean = false
  error: boolean = false


  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    localStorage.setItem('emailId', this.emailAddress)
    this.userService.sendMail(this.emailAddress).subscribe(
      data => {

        this.router.navigate(['/resetpassword'])
        this.error = false
        // this.alert = true
      },
      err => {
        localStorage.removeItem('emailId')
        this.error = true
        // this.alert = false
      }
    )

  }

  closeError() {
    this.error = false
  }

  closeAlert() {
    // this.alert= false
  }

}
