import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './account/login/login.component';
import { ProfileComponent } from './account/profile/profile.component';
import { DepartmentComponent } from './department/department.component';

const routes: Routes = [

  {path: 'login', component: LoginComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'department', component: DepartmentComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
