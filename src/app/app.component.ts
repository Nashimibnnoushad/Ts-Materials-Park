import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { CookieService } from 'ngx-cookie-service';
import { DbService } from './balancesheet/service/db.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FinanceApp';
  date = '19/06/2019 7.00 PM'
  version = '2.4.7';
  userName
  forMenu: boolean = true
  departmentname
  constructor(
    public authenticationService: AuthenticationService, private http: HttpClient,
    private router: Router, public dbservice: DbService,
    private cookieService: CookieService
  ) {
    this.authenticationService.isLoggedIn;
    this.authenticationService.departmentname = this.cookieService.get('departmentName')
    console.log(this.authenticationService.departmentname, 'alhfujiskhdfgudjsighbyudsgudsfgh')
  }
  changedepartment(value) {
    this.cookieService.set('departmentId', value.UniqueId)
    this.cookieService.set('departmentName', value.departmentName)
    this.authenticationService.departmentname = this.cookieService.get('departmentName')
    this.router.navigate(['/home'])
  }
  logOut() {
    console.log(this.authenticationService.isRemember,'remember')
    this.authenticationService.displaydepartment = false
    if (this.authenticationService.isRemember != true) {
      this.cookieService.delete('userName');
      this.cookieService.delete('password')
    }
    this.cookieService.delete('userType')
    this.cookieService.delete('userType');
    this.cookieService.delete('userId');
    this.cookieService.delete('feature')
    this.dbservice.isAutherisedUser = false
    this.authenticationService.isLoggedIn = false;
    this.dbservice.isLogin = false
    this.router.navigate(['/login'])
  }
  isHide() {
    if (this.authenticationService.forHide != true) {
      this.dbservice.forHide == true
    }
    else {
      this.dbservice.forHide == false
    }
  }
  isMenu() {

    if (this.forMenu == false) {
      this.forMenu = true
    }
    else {
      this.forMenu = false
    }
  }

  mouseEnter() {
    this.forMenu = true
  }

  mouseLeave(div: string) {
    this.forMenu = false
  }
  accountSettings() {
    console.log(this.authenticationService.isLoggedIn)
  }
  ngOnInit() {
    this.http.get("../assets/DbName.txt", { responseType: 'text' }).subscribe(data => {
      this.dbservice.dbName = data
    },
      err => {
        this.dbservice.LogError(err);
      })
    this.http.get("../assets/Key.txt", { responseType: 'text' }).subscribe(data => {
      this.dbservice.key = data
    },
      err => {
        this.dbservice.LogError(err);
      })
    this.http.get("../assets/Ip.txt", { responseType: 'text' }).subscribe(data => {
      this.dbservice.pyUrl = data
    },
      err => {
        this.dbservice.LogError(err);
      })
  }
}
