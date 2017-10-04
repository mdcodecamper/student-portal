import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app.routing';
import { NavbarModule } from './shared/navbar/navbar.module';
import { FooterModule } from './shared/footer/footer.module';
import { SidebarModule } from './sidebar/sidebar.module';
import { LbdModule } from './lbd/lbd.module';

import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { StudentListComponent } from './student-list/student-list.component';
import { AddNewStudentComponent } from './add-new-student/add-new-student.component';
import { IconsComponent } from './icons/icons.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { LoginComponent } from './login/login.component';
import { environment } from '../environments/environment';
import { AuthService } from './service/auth.service';
import { AngularFireAuth } from 'angularfire2/auth';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    StudentListComponent,
    AddNewStudentComponent,
    IconsComponent,
    NotificationsComponent,
    LoginComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NavbarModule,
    FooterModule,
    SidebarModule,
    RouterModule,
    AppRoutingModule,
    LbdModule,
    NgbModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule

  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
