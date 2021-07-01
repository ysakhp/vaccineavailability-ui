import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatenotifyComponent } from './createnotify/createnotify.component';
import { AuthGuard } from './guard/auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path : '',
    redirectTo : '/login',
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
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
