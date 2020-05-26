import { Component, OnInit } from '@angular/core';
import { Tsledger } from 'src/app/model/tsledger';
import { Dailysale } from 'src/app/model/dailysale';

@Component({
  selector: 'app-tsledgerlist',
  templateUrl: './tsledgerlist.component.html',
  styleUrls: ['./tsledgerlist.component.css']
})
export class TsledgerlistComponent implements OnInit {
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
    console.log(this.salelist)
   }
   Submit(){
     if(this.fromdate!=undefined){
       if(this.todate==undefined){
         var d = new Date()
         this.todate = this.formatDate(d)
       }
       else if(this.todate!=undefined){
         this.todate = this.formatDate(this.todate)
       }
       this.fromdate = this.formatDate(this.fromdate)
       this.datehide = false
       this.Filter()
     }
     else if(this.fromdate==undefined){
       this.datehide = true
       this.Displaylist()
     }
    }
    Displaylist(){
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
     console.log(this.ledgersalelist)
   }
   Filter(){
    let fromdate = this.fromdate
    let todate = this.todate
    let fromYear = fromdate.slice(6)
    let toYear = todate.slice(6)
    let fromMonth = fromdate.slice(3, 5)
    let toMonth = todate.slice(3, 5)
    let fromDay = fromdate.slice(0, 2)
    let toDay = todate.slice(0, 2)
    let saleyearlist: Dailysale[] = []
    let salemonthlist: Dailysale[] = []
    this.salelist = []

    for (let i = 0; i < this.tempsalelist.length; i++) {
      let year = this.tempsalelist[i].date.slice(6)
      if (year >= fromYear && year <= toYear) {
        saleyearlist.push(this.tempsalelist[i])
      }
    }
    for (let i = 0; i < saleyearlist.length; i++) {
      let month = saleyearlist[i].date.slice(3,5)
      if (month >= fromMonth && month <= toMonth) {
        salemonthlist.push(saleyearlist[i])
      }
    }
    for (let i = 0; i < salemonthlist.length; i++) {
      let day = salemonthlist[i].date.slice(0,2)
      let monthDay = salemonthlist[i].date.slice(3,5)
      if(fromMonth!=toMonth){
      if (monthDay == fromMonth) {
        console.log(day,fromDay)
        if (day >= fromDay) {
          this.salelist.push(salemonthlist[i])
        }
      }
      else if (monthDay == toMonth) {
        console.log(day,toDay)
        if (day <= toDay) {
          this.salelist.push(salemonthlist[i])
        }
      }
    }
    else if(fromMonth==toMonth){
      if (monthDay == fromMonth) {
        console.log(day,fromDay)
        if (day >= fromDay && day <= toDay) {
          this.salelist.push(salemonthlist[i])
        }
      } 
    }
    }
    console.log(this.salelist)
    this.Displaylist()
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
  Paid(index,Id){
   if(this.amount>=this.ledgersalelist[index].credit) {
   this.ledgersalelist[index].debit = this.ledgersalelist[index].credit
   this.ledgersalelist[index].credit = 0
   this.amount = this.amount - this.ledgersalelist[index].debit
   this.totalcreditamount = this.totalcreditamount - this.ledgersalelist[index].debit
   this.totaldebitamount = this.totaldebitamount + this.ledgersalelist[index].debit
   this.amounttoberecieved = this.amounttoberecieved - this.ledgersalelist[index].debit
   }
   else if(this.amount<this.ledgersalelist[index].credit){
     alert("There is no sufficient amount")
   }
  }
  Print(el){
    let printContents, popupWin;
    printContents = document.getElementById('printid').innerHTML;
    popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
    popupWin.document.write(`
<html>
<head>
  <title></title>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <style>
  //........Customized style.......
  body{
    padding-block-start: 0px;
    padding-top: 0px;
  }
  .a{
    text-align:right;
  }
  .table-responsive {
    /* display: block; */
    width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: -ms-autohiding-scrollbar;
}
.table .thead-dark th {
    color: black;
    background-color: white;
    border-color: #ddd;
}
  </style>
</head>
<body onload="window.print();window.close()">${printContents}</body>
</html>`
    );
    popupWin.document.close();
  }
  ngOnInit() {
  }

}
