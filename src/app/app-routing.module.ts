import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatenotifyComponent } from './createnotify/createnotify.component';
import { AuthGuard } from './guard/auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PasswordresetComponent } from './passwordreset/passwordreset.component';
import { GenerateOtpComponent } from './generate-otp/generate-otp.component';

const routes: Routes = [
  {
    path : '',
    redirectTo : '/home',
    pathMatch : 'full'
  },
  {
    path : 'login',
    component : LoginComponent
  },
  {
    path : 'register',
    component : RegisterComponent
  },
  {
    path : 'home',
    component : HomeComponent,
    canActivate : [AuthGuard]
  },

  {
    path : 'createnotify',
    component : CreatenotifyComponent,
    canActivate : [AuthGuard]
  },
  {
    path : 'resetpassword',
    component : PasswordresetComponent
  },
  {
    path : 'generateotp',
    component : GenerateOtpComponent
  }
  



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
