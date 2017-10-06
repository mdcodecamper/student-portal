import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { StudentListComponent } from './student-list/student-list.component';
import { AddNewStudentComponent } from './add-new-student/add-new-student.component';
import { IconsComponent } from './icons/icons.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './service/auth-guard.service';

// const routes: Routes = [
    
// ];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot([
      { path: 'dashboard',      component: HomeComponent},
      { path: 'user',           component: UserComponent, canActivate: [AuthGuardService] },
      { path: 'student-list',   component: StudentListComponent, canActivate: [AuthGuardService]  },
      { path: 'new-student',    component: AddNewStudentComponent },
      { path: 'icons',          component: IconsComponent },
      { path: 'notifications',  component: NotificationsComponent },
      { path: 'login',          component: LoginComponent},
      { path: '',          redirectTo: 'dashboard', pathMatch: 'full' }
    ])
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
