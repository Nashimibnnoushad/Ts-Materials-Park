import { Component, OnInit } from '@angular/core';
import { AdminUser } from 'src/app/user/models/user';
import { Common } from '../model/common';
import { CookieService } from 'ngx-cookie-service';
import { AuthenticationService } from 'src/app/authentication.service';
import { DbService } from '../service/db.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tsuser',
  templateUrl: './tsuser.component.html',
  styleUrls: ['./tsuser.component.css']
})
export class TsuserComponent implements OnInit {
  isAuthenticityChecked:boolean
  userList: AdminUser[] = [];
  username
  password
  Sameusername:boolean
  temp1
  temp2
  editmode:boolean
  editid
  constructor(    private route: ActivatedRoute,
    private router: Router,
    private dbservice: DbService,
    public authenticationService: AuthenticationService,
    private cookieService: CookieService) { 
    this.isAuthenticityChecked = true
    this.userList = JSON.parse(localStorage.getItem("User"))
    console.log(this.userList)
  }

  register(){
    this.Sameusername = false
    if(this.userList==null){
      let uniqueId = "U" + Common.newGuid();
      let User:AdminUser = new AdminUser()
      User.userId = uniqueId
      User.userName = this.username
      User.password = this.password
      User.userType = 'Admin'
      let templist = []
      templist.push(User)
      localStorage.setItem("User",JSON.stringify(templist));
      this.userList = JSON.parse(localStorage.getItem("User"))
      this.Reset()
    }
    else if(this.userList!=null){
      this.temp1 = this.username.toLowerCase()
      this.temp1 = this.temp1.replace(/\s/g, "")
      for(let i=0;i<this.userList.length;i++){
        this.temp2 = this.userList[i].userName.toLowerCase()
        this.temp2 = this.temp2.replace(/\s/g, "")
        if(this.temp1==this.temp2){
          alert('This User is Already Exist')
          this.Sameusername = true
        }
      }
      if(this.Sameusername!=true){
      let uniqueId = "U" + Common.newGuid();
      let User:AdminUser = new AdminUser()
      User.userId = uniqueId
      User.userName = this.username
      User.password = this.password
      User.userType = 'Admin'
      this.userList.push(User)
      localStorage.setItem("User",JSON.stringify(this.userList));
      this.Reset()
    }
    }
  }
  Reset(){
    this.username = null
    this.password = null
  }
  Delete(i){
   this.userList.splice(i,1)
   localStorage.setItem("User",JSON.stringify(this.userList))
  }
  Edit(i){
    this.editmode = true
    this.editid = i
    this.username = this.userList[i].userName
    this.password = this.userList[i].password
  }
  Update(){
    let User:AdminUser = new AdminUser()
    User.userId = this.userList[this.editid].userId
    User.userName = this.userList[this.editid].userName
    User.password = this.password
    User.userType = 'Admin'
    this.userList[this.editid] = User
    localStorage.setItem("User",JSON.stringify(this.userList))
    this.editmode = false
    this.Reset()
  }
  Cancel(){
    this.editmode = false
    this.Reset()
  }
  ngOnInit() {
  }

}
