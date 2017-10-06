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
import { AdminAuthGuardService } from './service/admin-auth-guard.service';

// const routes: Routes = [
    
// ];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot([
      { path: 'admin/dashboard',      component: HomeComponent, canActivate: [AuthGuardService, AdminAuthGuardService]},
      { path: 'admin/user',           component: UserComponent, canActivate: [AuthGuardService, AdminAuthGuardService] },
      { path: 'admin/student-list',   component: StudentListComponent, canActivate: [AuthGuardService, AdminAuthGuardService]  },
      { path: 'admin/new-student',    component: AddNewStudentComponent, canActivate: [AuthGuardService, AdminAuthGuardService] },
      { path: 'icons',          component: IconsComponent, canActivate: [AuthGuardService] },
      { path: 'notifications',  component: NotificationsComponent, canActivate: [AuthGuardService] },
      { path: 'login',          component: LoginComponent},
      

      { path: '',          redirectTo: 'dashboard', pathMatch: 'full' }
    ])
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
