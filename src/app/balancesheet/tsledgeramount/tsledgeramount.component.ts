import { Component, OnInit } from '@angular/core';
import { Tsledger } from 'src/app/model/tsledger';
import { Dailysale } from 'src/app/model/dailysale';

@Component({
  selector: 'app-tsledgeramount',
  templateUrl: './tsledgeramount.component.html',
  styleUrls: ['./tsledgeramount.component.css']
})
export class TsledgeramountComponent implements OnInit {
  date
  customername
  ledgerid
  time
  ledgername
  fromdate
  todate
  amount
  totalsaleamount
  totalfeet
  totaldebitamount
  totalcreditamount
  amounttoberecieved
  overflow
  isAuthenticityChecked:boolean
  ledgerlist:Tsledger[]=[]
  templedgerlist:Tsledger[]=[]
  salelist:Dailysale[]=[]
  tempsalelist:Dailysale[]=[]
  ledgersalelist:Dailysale[]=[]
  templist:Dailysale[]=[]
  datehide:boolean = true
  constructor() {
    this.isAuthenticityChecked = true
    this.ledgername = 'Ledger Name'
    this.ledgerlist = JSON.parse(localStorage.getItem("Ledger"))
    this.tempsalelist = JSON.parse(localStorage.getItem("DailySales"))
    this.salelist = this.tempsalelist
   }
    Submit(){
    this.ledgersalelist = []
    this.totalsaleamount = 0
    this.totalfeet = 0
    this.totalcreditamount = 0
    this.totaldebitamount = 0
    this.amounttoberecieved = 0
    this.overflow = 0
    if(this.ledgerlist.length!=0||this.ledgerlist!=null||this.ledgerlist!=undefined){
     this.templedgerlist = this.ledgerlist.filter(x=>x.ID==this.ledgerid)
     this.ledgername = this.templedgerlist[0].name
     this.overflow = this.templedgerlist[0].depositamount
    }
     if(this.salelist.length!=0||this.salelist!=null||this.salelist!=undefined){
      this.ledgersalelist = this.salelist.filter(x=>x.customerId==this.ledgerid)
     }

     if(this.ledgersalelist.length!=0||this.ledgersalelist!=null||this,this.ledgersalelist!=undefined){
       for(let i=0;i<this.ledgersalelist.length;i++){
        if(this.ledgersalelist[i].credit!=null || this.ledgersalelist[i].credit!=undefined){
          this.totalcreditamount = this.totalcreditamount + this.ledgersalelist[i].credit
          this.totalsaleamount = this.totalsaleamount + this.ledgersalelist[i].credit
        }
        if(this.ledgersalelist[i].debit!=null || this.ledgersalelist[i].debit!=undefined){
          this.totaldebitamount = this.totaldebitamount + this.ledgersalelist[i].debit
          this.totalsaleamount = this.totalsaleamount + this.ledgersalelist[i].debit
        }
        this.totalfeet = this.totalfeet + this.ledgersalelist[i].feet
        if(this.templedgerlist[0].amount==null||this.templedgerlist[0].amount==undefined){
          this.templedgerlist[0].amount = 0
        }
        let tempamount = this.totalsaleamount-(this.totaldebitamount+this.templedgerlist[0].amount)
        if(tempamount<=0){
          this.amounttoberecieved = 0
        }
        else if(tempamount>0){
          this.amounttoberecieved = tempamount
        }
       }
     }
   }
   formatDate(date) {
    var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    return [day, month, year].join('-');
  }
  Add(){
    if(this.templedgerlist[0].depositamount!=null || this.templedgerlist[0].depositamount!=undefined){
      this.amount = this.amount + this.templedgerlist[0].depositamount
      this.overflow = 0
    }
    for(let i=0; i<this.ledgersalelist.length; i++){
      if((this.ledgersalelist[i].debit==null || this.ledgersalelist[i].debit==undefined) && this.ledgersalelist[i].credit!=0){
        if(this.amount>=this.ledgersalelist[i].credit){
          this.totalcreditamount = this.totalcreditamount - this.ledgersalelist[i].credit
          this.totaldebitamount = this.totaldebitamount + this.ledgersalelist[i].credit
          this.amounttoberecieved = this.amounttoberecieved - this.ledgersalelist[i].credit
          this.ledgersalelist[i].debit = this.ledgersalelist[i].credit
          this.amount = this.amount - this.ledgersalelist[i].credit
          this.ledgersalelist[i].credit = 0
        }
        else if(this.amount<this.ledgersalelist[i].credit && this.amount>0){
          this.totalcreditamount = this.totalcreditamount - this.amount
          this.totaldebitamount = this.totaldebitamount + this.amount
          this.amounttoberecieved = this.amounttoberecieved - this.amount
          this.ledgersalelist[i].debit = this.amount
          this.ledgersalelist[i].credit = this.ledgersalelist[i].credit - this.amount
          this.amount = 0
        }
      }
      else if(this.ledgersalelist[i].debit!=0 && this.ledgersalelist[i].credit!=0){
        if(this.amount>=this.ledgersalelist[i].credit){
          this.totalcreditamount = this.totalcreditamount - this.ledgersalelist[i].credit
          this.totaldebitamount = this.totaldebitamount + this.ledgersalelist[i].credit
          this.amounttoberecieved = this.amounttoberecieved - this.ledgersalelist[i].credit
          this.ledgersalelist[i].debit = this.ledgersalelist[i].credit + this.ledgersalelist[i].debit
          this.amount = this.amount - this.ledgersalelist[i].credit
          this.ledgersalelist[i].credit = 0
        }
        else if(this.amount<this.ledgersalelist[i].credit && this.amount>0){
          this.totalcreditamount = this.totalcreditamount - this.amount
          this.totaldebitamount = this.totaldebitamount + this.amount
          this.amounttoberecieved = this.amounttoberecieved - this.amount
          this.ledgersalelist[i].debit = this.amount + this.ledgersalelist[i].debit
          this.ledgersalelist[i].credit = this.ledgersalelist[i].credit - this.amount
          this.amount = 0
        }
      }
    }
    this.overflow = this.amount + this.overflow
    for(let i=0;i<this.ledgerlist.length;i++){
      if(this.ledgerlist[i].ID == this.templedgerlist[0].ID){
        this.ledgerlist[i].depositamount = this.overflow
      }
    }
    localStorage.setItem("Ledger",JSON.stringify(this.ledgerlist));
    for(let i=0;i<this.tempsalelist.length;i++){
      for(let j =0; j<this.ledgersalelist.length;j++){
        if(this.ledgersalelist[j].ID==this.tempsalelist[i].ID){
          this.tempsalelist[i] = this.ledgersalelist[j]
        }
      }
    }
    localStorage.setItem("DailySales",JSON.stringify(this.tempsalelist))
  }
  ngOnInit() {
  }

}

