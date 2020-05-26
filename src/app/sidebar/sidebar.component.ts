import { Component, OnInit } from '@angular/core';
import { Observable ,BehaviorSubject } from 'rxjs';
import { AuthenticationService } from '../authentication.service';
import { DbService } from '../balancesheet/service/db.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  isLoggedIn$: Observable<boolean>;
  shouldShow:boolean=false;
  islog:boolean=false
  feature
  userType
  constructor(private authService : AuthenticationService , private authenticationService : AuthenticationService,
    public dbservice:DbService,
    private cookieService : CookieService 
    ) { 
      this.feature = this.cookieService.get('feature')
      this.userType = this.cookieService.get('userType')
    }

    hide(){
      this.dbservice.isHide=false
    }
    unHide(){
      this.dbservice.isHide=true
    }

  ngOnInit() {
    


   
  }
  

}
