import { Component, OnInit } from '@angular/core';
import { UserList, UserData, User, AdminUser } from '../models/user';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../../authentication.service';
import { DbService } from '../../balancesheet/service/db.service';
import { CookieService } from 'ngx-cookie-service';
import { Common } from 'src/app/balancesheet/model/common';
import { UserType } from '../models/usertype';
import { DepartmentSettings } from 'src/app/balancesheet/model/departmentsettings';
import { Previlege } from '../models/previlege';
import { Feature } from '../models/feature';


@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  // model: any = {};
  // loading = false;
  // isAutherisedUser: boolean = false;
  // isLogin: boolean = false
  userList: AdminUser[] = [];
  // username
  // password


  model: any = {};
  loading = false;
  newUser: UserList = new UserList();
  // newUserfordb: User = new User();
  newUsertypefordb: UserType = new UserType();
  isAutherisedUser: boolean = false;
  isLogin: boolean = false
  returnUrl: string;
  // userList: UserList[] = [];
  userTypeList: UserType[] = [];
  usersData: UserData;
  departmentlist: DepartmentSettings[] = []
  privelegelist: Previlege[] = []
  featurelist: Feature[] = []
  featureuserlist: Feature[] = []
  feature
  department: DepartmentSettings = new DepartmentSettings()
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dbservice: DbService,
    public authenticationService: AuthenticationService,
    private cookieService: CookieService

  ){
    // this.userList = JSON.parse(localStorage.getItem("User"))
    // if(this.userList.length==0){
      // let uniqueId = "U" + Common.newGuid();
      // let User = [{"userId":uniqueId,"userName":"Admin","password":"admin","userType":"Admin"}]
      // localStorage.setItem("User",JSON.stringify(User));
    // }
  
    // this.model.username = this.cookieService.get('userName')
    // this.model.password = this.cookieService.get('password')
  }
  remember(value){
    if(value == true){
      this.authenticationService.isRemember = true
    }
    else{
      this.authenticationService.isRemember = false
    }
  }
  ngOnInit() {

  }


  login() {
    if(this.model.username=='admin' && this.model.password=='admin'){
      this.isAutherisedUser = true
      this.dbservice.isAutherisedUser = true
      this.dbservice.isLogin = true
      this.authenticationService.isLoggedIn = true;
      this.authenticationService.userName = this.model.username;
      this.authenticationService.userType = this.model.usertype;
              this.router.navigate(['/home'])
    }
    else if(this.model.username!='admin' && this.model.password!='admin'){
    this.userList = JSON.parse(localStorage.getItem("User"))
    console.log(this.userList)
    for(let i=0;i<this.userList.length;i++)
    {
     if(this.model.username==this.userList[i].userName && this.model.password==this.userList[i].password)
      {
        this.isAutherisedUser = true
        this.dbservice.isAutherisedUser = true
        this.dbservice.isLogin = true
        this.authenticationService.isLoggedIn = true;
        this.authenticationService.userName = this.model.username;
        this.authenticationService.userType = this.model.usertype;
                this.router.navigate(['/home'])
      }
    } 
   }      
        
        if(this.isAutherisedUser!=true) {
          alert('Incorrect Passwod or Username')
        }
      }

  
}


