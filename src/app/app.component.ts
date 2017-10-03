import { Component, OnInit } from '@angular/core';
import { LocationStrategy, PlatformLocation, Location } from '@angular/common';
import { AuthService } from './service/auth.service';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  user$: Observable<firebase.User>;

  public isLoggedIn: boolean;

     constructor(public location: Location,
                 private auth: AngularFireAuth,
                 private router: Router) {
     
          this.user$ = this.auth.authState;             
          if(this.user$  == null) {
            console.log("Not Logged in.");
            this.router.navigate(['login']);
            this.isLoggedIn = false;
          } else {
            console.log("Successfully Logged in.");
            this.isLoggedIn = true;
            this.router.navigate(['dashboard']);
          }          
      }

    // tslint:disable-next-line:one-line
    ngOnInit(){
    }

    // tslint:disable-next-line:one-line
    isMap(path){
      let titlee = this.location.prepareExternalUrl(this.location.path());
      titlee = titlee.slice( 1 );
      // tslint:disable-next-line:one-line
      if (path === titlee){
        return false;
      }
      // tslint:disable-next-line:one-line
      else {
        return true;
      }
    }
}
