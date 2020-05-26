import { Component, OnInit } from '@angular/core';
import { AdminUser } from 'src/app/user/models/user';
import { Common } from '../model/common';
import { CookieService } from 'ngx-cookie-service';
import { AuthenticationService } from 'src/app/authentication.service';
import { DbService } from '../service/db.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Tsitem } from 'src/app/model/tsitem';
@Component({
  selector: 'app-tsadditem',
  templateUrl: './tsadditem.component.html',
  styleUrls: ['./tsadditem.component.css']
})
export class TsadditemComponent implements OnInit {
  isAuthenticityChecked:boolean
  itemList: Tsitem[] = [];
  itemname
  Sameitemname:boolean
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
    this.itemList = JSON.parse(localStorage.getItem("Item"))
    console.log(this.itemList)
  }

  register(){
    this.Sameitemname = false
    if(this.itemList==null){
      let uniqueId = "I" + Common.newGuid();
      let item:Tsitem = new Tsitem()
      item.ID = uniqueId
      item.itemName = this.itemname
      let templist = []
      templist.push(item)
      localStorage.setItem("Item",JSON.stringify(templist));
      this.itemList = JSON.parse(localStorage.getItem("Item"))
      this.Reset()
    }
    else if(this.itemList!=null){
      this.temp1 = this.itemname.toLowerCase()
      this.temp1 = this.temp1.replace(/\s/g, "")
      for(let i=0;i<this.itemList.length;i++){
        this.temp2 = this.itemList[i].itemName.toLowerCase()
        this.temp2 = this.temp2.replace(/\s/g, "")
        if(this.temp1==this.temp2){
          alert('This Item is Already Exist')
          this.Sameitemname = true
        }
      }
      if(this.Sameitemname!=true){
        let uniqueId = "I" + Common.newGuid();
        let item:Tsitem = new Tsitem()
        item.ID = uniqueId
        item.itemName = this.itemname
      this.itemList.push(item)
      localStorage.setItem("Item",JSON.stringify(this.itemList));
      this.Reset()
    }
    }
  }
  Delete(i){
    this.itemList.splice(i,1)
    localStorage.setItem("Item",JSON.stringify(this.itemList))
    this.itemList = JSON.parse(localStorage.getItem("Item"))
   }
  Reset(){
    this.itemname = null
  }
  ngOnInit() {
  }

}
