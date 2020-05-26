import { Component, OnInit } from '@angular/core';
import { Tsexpenseledger } from 'src/app/model/tsexpenseledger';
import { Common } from '../model/common';
import { ActivatedRoute, Router } from '@angular/router';
import { DbService } from '../service/db.service';
import { AuthenticationService } from 'src/app/authentication.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-tsexpenceledger',
  templateUrl: './tsexpenceledger.component.html',
  styleUrls: ['./tsexpenceledger.component.css']
})
export class TsexpenceledgerComponent implements OnInit {
  isAuthenticityChecked: boolean
  ledgerlist: Tsexpenseledger[] = []
  samename: boolean = false
  ledgername
  temp1
  temp2
  constructor(private route: ActivatedRoute,
    private router: Router,
    private dbservice: DbService,
    public authenticationService: AuthenticationService,
    private cookieService: CookieService) {
    this.isAuthenticityChecked = true
    this.ledgerlist = JSON.parse(localStorage.getItem("ExpenseLedgers"))
    console.log(this.ledgerlist)
  }
  register() {
    this.samename = false
    if (this.ledgerlist == null) {
      let uniqueId = "LE" + Common.newGuid();
      let ledger: Tsexpenseledger = new Tsexpenseledger()
      ledger.ID = uniqueId
      ledger.expenseLedger = this.ledgername
      ledger.paidamount = 0
      let templist = []
      templist.push(ledger)
      localStorage.setItem("ExpenseLedgers", JSON.stringify(templist));
      this.ledgerlist = JSON.parse(localStorage.getItem("ExpenseLedgers"))
      this.Reset()
    }
    else if (this.ledgerlist != null) {
      this.temp1 = this.ledgername.toLowerCase()
      this.temp1 = this.temp1.replace(/\s/g, "")
      for (let i = 0; i < this.ledgerlist.length; i++) {
        this.temp2 = this.ledgerlist[i].expenseLedger.toLowerCase()
        this.temp2 = this.temp2.replace(/\s/g, "")
        if (this.temp1 == this.temp2) {
          alert('This Item is Already Exist')
          this.samename = true
        }
      }
      if (this.samename != true) {
        let uniqueId = "LE" + Common.newGuid();
        let ledger: Tsexpenseledger = new Tsexpenseledger()
        ledger.ID = uniqueId
        ledger.expenseLedger = this.ledgername
        ledger.paidamount = 0
        this.ledgerlist.push(ledger)
        localStorage.setItem("ExpenseLedgers", JSON.stringify(this.ledgerlist));
        this.ledgerlist = JSON.parse(localStorage.getItem("ExpenseLedgers"))
        this.Reset()
      }
    }
  }
  Delete(i) {
    this.ledgerlist.splice(i, 1)
    localStorage.setItem("ExpenseLedgers", JSON.stringify(this.ledgerlist))
    this.ledgerlist = JSON.parse(localStorage.getItem("ExpenseLedgers"))
  }
  Reset() {
    this.ledgername = null
  }
  ngOnInit() {
  }

}
