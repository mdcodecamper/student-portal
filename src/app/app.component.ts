import { Component, OnInit } from '@angular/core';
import { LocationStrategy, PlatformLocation, Location } from '@angular/common';
import { AuthService } from './service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


     constructor(public location: Location,
                 public auth: AuthService,
                 public router: Router
                 ) {
                   auth.user$.subscribe(user => {
                     if(user){
                       let returnUrl = localStorage.getItem('returnUrl');
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
