import { Component, OnInit } from '@angular/core';
import { LocationStrategy, PlatformLocation, Location } from '@angular/common';
import { AuthService } from './service/auth.service';
import { Router } from '@angular/router';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


     constructor(public location: Location,
                 private auth: AuthService,
                 router: Router,
                 private userService: UserService
                 ) {
                   auth.user$.subscribe(user => {
                     if (user) {
                        userService.save(user);

                       const returnUrl = localStorage.getItem('returnUrl');
                       router.navigateByUrl(returnUrl);
                     }
                   }); 

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
