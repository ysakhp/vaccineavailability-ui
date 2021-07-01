import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user';
import { UserService } from '../service/user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  alert: boolean = false
  error: boolean = false
  confirmpassword : any 
  userModel = new User();
  constructor(private userService: UserService,private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(){

    this.userService.registerUser(this.userModel).subscribe(
      data => {
        
        this.userService.setSuccess(true)
        this.alert = true
        this.error = false
        this.router.navigate(['/login'])
      },
      error => {
        this.alert = false
        this.error = true
      }
    )

  }

  closeError(){
    this.error = false
  }
}
