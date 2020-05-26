import { Common } from '../model/common';
import { CookieService } from 'ngx-cookie-service';
import { AuthenticationService } from 'src/app/authentication.service';
import { DbService } from '../service/db.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminUser } from 'src/app/user/models/user';
import { OnInit, Component } from '@angular/core';
import { Tsledger } from 'src/app/model/tsledger';

@Component({
  selector: 'app-tsledger',
  templateUrl: './tsledger.component.html',
  styleUrls: ['./tsledger.component.css']
})
export class TsledgerComponent implements OnInit {
  isAuthenticityChecked:boolean
  ledgerList: Tsledger[] = [];
  ledgername
  ledgermobile
  ledgeraddress
  temp1
  temp2
  Sameusername:boolean
  editmode: boolean
  editid
  constructor(    private route: ActivatedRoute,
    private router: Router,
    private dbservice: DbService,
    public authenticationService: AuthenticationService,
    private cookieService: CookieService) { 
    this.isAuthenticityChecked = true
    this.ledgerList = JSON.parse(localStorage.getItem("Ledger"))
    console.log(this.ledgerList)
  }

  register(){
    this.Sameusername = false
    if(this.ledgerList==null){
      let uniqueId = "U" + Common.newGuid();
      let ledger:Tsledger = new Tsledger()
      ledger.ID = uniqueId
      ledger.name = this.ledgername
      ledger.mobile = this.ledgermobile
      ledger.address = this.ledgeraddress
      ledger.amount = 0
      ledger.depositamount = 0
      let templist = []
      templist.push(ledger)
      localStorage.setItem("Ledger",JSON.stringify(templist));
      this.ledgerList = JSON.parse(localStorage.getItem("Ledger"))
      this.Reset()
    }
    else if(this.ledgerList!=null){
      this.temp1 = this.ledgername.toLowerCase()
      this.temp1 = this.temp1.replace(/\s/g, "")
      for(let i=0;i<this.ledgerList.length;i++){
        this.temp2 = this.ledgerList[i].name.toLowerCase()
        this.temp2 = this.temp2.replace(/\s/g, "")
        if(this.temp1==this.temp2){
        alert('This Ledger is Already Exist')
        this.Sameusername = true
        }
      }
      if(this.Sameusername!=true){
      let uniqueId = "U" + Common.newGuid();
      let ledger:Tsledger = new Tsledger()
      ledger.ID = uniqueId
      ledger.name = this.ledgername
      ledger.mobile = this.ledgermobile
      ledger.address = this.ledgeraddress
      ledger.amount = 0
      ledger.depositamount = 0
      this.ledgerList.push(ledger)
      localStorage.setItem("Ledger",JSON.stringify(this.ledgerList));
      this.Reset()
    }
    }
  }
  Reset(){
    this.ledgername = null
    this.ledgermobile = null
    this.ledgeraddress = null
  }
  Delete(i){
   this.ledgerList.splice(i,1)
   localStorage.setItem("Ledger",JSON.stringify(this.ledgerList))
  }
  Edit(i){
    this.editmode = true
    this.editid = i
    this.ledgername = this.ledgerList[i].name
    this.ledgermobile = this.ledgerList[i].mobile
    this.ledgeraddress =this.ledgerList[i].address
  }
  Update(){
    let ledger:Tsledger = new Tsledger()
    ledger.ID = this.ledgerList[this.editid].ID
    ledger.name = this.ledgerList[this.editid].name
    ledger.mobile = this.ledgermobile
    ledger.address = this.ledgeraddress
    this.ledgerList[this.editid] = ledger
    localStorage.setItem("Ledger",JSON.stringify(this.ledgerList))
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
