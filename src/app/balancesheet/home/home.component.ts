import { Component, OnInit } from '@angular/core';
import { User, UserList, UserData } from 'src/app/user/models/user';
import { UserType } from 'src/app/user/models/usertype';
import { DbService } from '../service/db.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'src/app/authentication.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isprivilegeChecked: boolean;
  newUser: User = new User();
  userList: UserList[] = [];
  userTypeList: UserType[] = [];
  userData: UserData;
  isAuthenticityChecked: boolean;
  userType
  feature
  constructor(public dbservice: DbService, private router: Router,
    private route: ActivatedRoute, private authenticationService: AuthenticationService,
    private cookieService: CookieService) {
      this.feature = this.cookieService.get('feature')
      this.userType = this.cookieService.get('userType')
    }

  ngOnInit() {
    this.authenticationService.userName = this.cookieService.get('userName');
    this.authenticationService.userId = this.cookieService.get('userId');
    console.log(this.authenticationService.userId, '**********')
    this.authenticationService.userType = this.cookieService.get('userType');
    this.authenticationService.userTypeId = this.cookieService.get('userTypeId');
    this.authenticationService.password = this.cookieService.get('password');
    console.log('userName :', this.authenticationService.userName, 'userId :', this.authenticationService.userId, 'userType :',
      this.authenticationService.userType, 'userTypeId :', this.authenticationService.userTypeId, 'password', this.authenticationService.password);
    this.authenticationService.userAuthentication().subscribe(resdata => {
      console.log(resdata);
      console.log(resdata.Data.length)
      if (resdata.Data.length == 1) {
        this.authenticationService.isAutherisedUser = true;
        this.dbservice.isLogin = true

      }
      // if (this.authenticationService.isAutherisedUser != true) {
      //   this.router.navigate(['login'])
      // }
    },
      err => {
        this.dbservice.LogError(err)
      },
      () => {
        console.log('completed');
      }
    )
  }
  // activate(user: User) {
  //   if (confirm('are you sure want to activate this user')) {
  //     let updateData = {
  //       "isActive": true
  //     }
  //     let whereBody = {
  //       "userId": user.userId
  //     };
  //     this.dbservice.UpdateRows('User', updateData, whereBody).subscribe(resdata => {
  //       console.log(resdata);

  //     },
  //       err => { this.dbservice.LogError(err) },
  //       () => {
  //         alert('activated successfully');
  //         user.isActive = true
  //       }
  //     )
  //   }
  // }

  
    
  }

