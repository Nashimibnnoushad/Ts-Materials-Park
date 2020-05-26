import { Component, OnInit } from '@angular/core';
import { Tsaddexpense } from 'src/app/model/tsaddexpense';
import { Tsexpenseledger } from 'src/app/model/tsexpenseledger';

@Component({
  selector: 'app-tsexpenceledgerlist',
  templateUrl: './tsexpenceledgerlist.component.html',
  styleUrls: ['./tsexpenceledgerlist.component.css']
})
export class TsexpenceledgerlistComponent implements OnInit {
  isAuthenticityChecked
  totalexpenseamount
  paidamount
  balanceamount
  ledgerid
  amount
  expenselist: Tsaddexpense[] = []
  ledgerexpenselist:Tsaddexpense[]=[]
  expenseledgerlist: Tsexpenseledger[] = []
  templedgerlist:Tsexpenseledger[]=[]
  constructor() { 
    this.isAuthenticityChecked = true
    this.expenselist = JSON.parse(localStorage.getItem("Expense"))
    this.expenseledgerlist = JSON.parse(localStorage.getItem("ExpenseLedgers"))
  }
  Submit(){
  this.templedgerlist = this.expenseledgerlist.filter(x=>x.ID==this.ledgerid)
   if(this.expenselist!=null){
     this.ledgerexpenselist = this.expenselist.filter(x=>x.expenseledgerid==this.ledgerid)
     this.totalexpenseamount = 0
     this.balanceamount = 0
     this.paidamount = this.templedgerlist[0].paidamount
     for(let i=0;i<this.ledgerexpenselist.length;i++){
      this.totalexpenseamount = this.totalexpenseamount + this.ledgerexpenselist[i].amount
     }
     this.balanceamount = this.totalexpenseamount - this.paidamount
   }
  }
  Add(){
    this.paidamount = this.paidamount + this.amount
    this.balanceamount = this.balanceamount - this.amount
    for(let i=0;i<this.expenseledgerlist.length;i++){
      if(this.expenseledgerlist[i].ID = this.templedgerlist[0].ID){
        this.expenseledgerlist[i].paidamount = this.expenseledgerlist[i].paidamount + this.amount
      }
    }
    localStorage.setItem("ExpenseLedgers",JSON.stringify(this.expenseledgerlist));
    this.amount = 0
  }
  ngOnInit() {
  }

}
