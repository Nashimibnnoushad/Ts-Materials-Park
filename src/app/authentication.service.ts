  import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
// import 'rxjs/add/operator/map'
import { map } from 'rxjs/operators';

import { BehaviorSubject } from 'rxjs';
import { DbService } from './balancesheet/service/db.service';
import { User } from './user/models/user';
import { ReturnStatement } from '@angular/compiler';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  public isLoggedIn: boolean;
  public isAutherisedUser: boolean;
  public forHide: boolean=true;
  public password : string
  public userName: string;
  public userId: string;
  myAwesomeAttributeValue
  public userType: string;
  public userTypeId: string
  userList: User[] = [];
  public pyUrl;
  public dbName;
  public key;
  public departmentlist = []
  public departmentname: string
  public displaydepartment:boolean
  public isRemember:boolean
  constructor(private http: HttpClient,
    private dbservice: DbService) { 

      
    }

    public userAuthentication():Observable<any> {
      // let wher
      console.log('inside')
      let whereBody = {
        "userId":this.userId,
        "password" : this.password,
        "isActive": true
      }
     return this.dbservice.GetRows('User',whereBody)
    }
  
}
