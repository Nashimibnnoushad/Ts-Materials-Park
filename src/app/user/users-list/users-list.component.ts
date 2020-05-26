import { Component, OnInit } from '@angular/core';
import { User, UserList, UserData } from '../models/user';
import { UserType } from '../models/usertype';
import { Router, ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { DbService } from '../../balancesheet/service/db.service';
import { AuthenticationService } from '../../authentication.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  isprivilegeChecked : boolean;  
  newUser: User = new User();
  userList: UserList[] = [];
  userTypeList: UserType[] = [];
  usersData: UserData;
  isAuthenticityChecked : boolean ;
  constructor(public dbservice: DbService, private router: Router,
    private route: ActivatedRoute,  private authenticationService:AuthenticationService,
    private cookieService : CookieService) {




    this.dbservice.GetRows('UserType').subscribe(resdata => {
      this.userTypeList = new Array<UserType>();
      for (let i = 0; i <= resdata.Data.length; i++) {
        let c = new UserType();
        if (resdata.Data[i] != null) {

          c = resdata.Data[i];

          this.userTypeList.push(c);
        }
      }
      console.log(this.userTypeList, 'user type lIST');


      this.dbservice.GetRows('User').subscribe(resdata => {
        this.usersData = resdata;
        console.log(resdata,'****')
        this.userList = [];

        for (let i = 0; i <= this.usersData.Data.length; i++) {
          let element = this.usersData.Data[i]

          if (element != null) {


            let userListListItem = new UserList();
            let userobj: User = element;
            console.log("****" + element);
            if (userobj.userTypeId != undefined) {
              userobj.userTypeId = userobj.userTypeId.replace("/", "");
            }
            userListListItem.user = userobj;
            let usertype = this.userTypeList.filter(s => s.userTypeId == (userobj.userTypeId));
            if (usertype.length > 0) {
              userListListItem.usertype = usertype[0];
            }


            this.userList.push(userListListItem);
            console.log(this.userList)

          }
        }
      },

        err => {
          this.dbservice.LogError(err)
        }
      )



    },
      err => {
        this.dbservice.LogError(err);
      }
    )

    //   this.dbservice.GetRows('users').subscribe(resdata => {
    //     this.userList = new Array<Users>();
    //     for (let i = 0; i <= resdata.Data.length; i++) {
    //       let c = new Users();
    //       if (resdata.Data[i] != null) {

    //         c = resdata.Data[i];

    //         this.userList.push(c);
    //       }
    //     }
    //     console.log(this.userList, 'user lIST')
    //   },
    //   err => {
    //     this.dbservice.LogError(err)
    //   }
    // )
    // let itemRef = db.object('user');
    // itemRef.snapshotChanges().subscribe(action => {
    //   var quatationsList = action.payload.val();
    //   let obj = Common.snapshotToArray(action.payload);
    //   this.users = [];
    //   obj.forEach(element => {
    //     let obj: Users = JSON.parse(element);
    //     if (obj.uid != undefined) {
    //       obj.uid = obj.uid.replace("/", "");
    //       this.newUser = obj;
    //     }

    //     console.log("user added")
    //     this.users.push(obj as Users);

    //   });
    // });
  }

  ngOnInit() {
    this.authenticationService.userName = this.cookieService.get('userName');
    this.authenticationService.userId = this.cookieService.get('userId');
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
        if (this.authenticationService.userType != 'Super Admin') {
          console.log('this is not super admin');
          let whereBody = {
            "featureId": "7c96bbcc-9981-4f7c-9aa7-538ec2f82bd0",
            "userTypeId": this.authenticationService.userTypeId,
          }
          this.dbservice.GetRows('privilege', whereBody).subscribe(resdata => {
            console.log(resdata);
            if (resdata.Data.length > 0) {
              console.log('have the permission');
              this.isprivilegeChecked = true;
              this.isAuthenticityChecked = true;
              this.dbservice.isLogin = true
            }
            else {
              this.router.navigate(['/error'])
            }



          },
            err => {
              this.dbservice.LogError(err);

            },
            () => {

            }
          )

        }
        else {
          this.isAuthenticityChecked = true;
          this.dbservice.isLogin = true
        }
      }
      if (this.authenticationService.isAutherisedUser != true) {
        this.router.navigate(['login'])
      }
    },
      err => {
        this.dbservice.LogError(err)
      },
      () => {
        console.log('completed');
      }
    )
   }
  activate(user : User) {
    if(confirm('are you sure want to activate this user')){
    let updateData = {
      "isActive": true
    }
    let whereBody = {
      "userId": user.userId
    };
    this.dbservice.UpdateRows('User', updateData, whereBody).subscribe(resdata => {
      console.log(resdata);
  
    },
      err => { this.dbservice.LogError(err) },
      () => {
        alert('activated successfully');
        user.isActive = true
      }
    )
    }}

  delete(key, user: User) {


    // this.db.database.ref(`user/${key}`).once("value", snapshot => {
    //   let sid = snapshot.key;
    //   if (snapshot.exists()) {
    //     if (confirm('Are you sure to delete ' + usr.username)) {

    //       var updates = {};
    //       updates['/user/' + sid] = JSON.stringify(usr);
    //       try {
    //         let up = this.db.database.ref().update(updates);
    //         this.router.navigate(['/listuser']);
    //       }
    //       catch (ex) {
    //         alert("Error in Deleting user");
    //       }
    //     }
    //   }
    // })

  }
  

}

