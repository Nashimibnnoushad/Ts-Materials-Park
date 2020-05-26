import { Component, OnInit } from '@angular/core';
import { Tsledger } from 'src/app/model/tsledger';
import { Tsitem } from 'src/app/model/tsitem';
import { Dailysale } from 'src/app/model/dailysale';
import { Common } from '../model/common';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Tsaddexpense } from 'src/app/model/tsaddexpense';
import { Tspurchase } from 'src/app/model/tspurchase';
// import * as jspdf from 'jspdf';
// import html2canvas from 'html2canvas';
@Component({
  selector: 'app-tsdailysalerepport',
  templateUrl: './tsdailysalerepport.component.html',
  styleUrls: ['./tsdailysalerepport.component.css']
})
export class TsdailysalerepportComponent implements OnInit {
  ledger
  item
  feet
  debit
  credit
  date
  customername
  time
  selecteddate
  totalsaleamount 
  totaldebitamount 
  totalcreditamount 
  totalpurchaseamount 
  totalexpenseamount 
  totalfeet 
  inhandamount 
  shortage 
  isAuthenticityChecked:boolean
  ledgerlist:Tsledger[]=[]
  itemlist:Tsitem[]=[]
  salelist:Dailysale[]=[]
  todaysalelist:Dailysale[]=[]
  templist:Dailysale[]=[]
  expenselist:Tsaddexpense[]=[]
  todayexpenselist:Tsaddexpense[]=[]
  purchaselist:Tspurchase[]=[]
  todaypurchaselist:Tspurchase[]=[]
  table /* 1 for sale 2 for expense 3 for purchase */
    constructor(private fb: FormBuilder) { 
      this.isAuthenticityChecked = true
      let d = new Date()
      this.date = this.formatDate(d)
      this.selecteddate = this.date
      this.table = 1
      this.salelist = JSON.parse(localStorage.getItem("DailySales"))
      console.log(this.salelist)

      // salelist

      if(this.salelist!=null){
        this.todaysalelist = this.salelist.filter(x=>x.date==this.date)
        this.totalsaleamount = 0
        this.totalcreditamount = 0
        this.totaldebitamount = 0
        this.totalfeet = 0
        for(let i=0;i<this.todaysalelist.length;i++){
          if(this.todaysalelist[i].credit!=null || this.todaysalelist[i].credit!=undefined){
            this.totalcreditamount = this.totalcreditamount + this.todaysalelist[i].credit
            this.totalsaleamount = this.totalsaleamount + this.todaysalelist[i].credit
          }
          if(this.todaysalelist[i].debit!=null || this.todaysalelist[i].debit!=undefined){
            this.totaldebitamount = this.totaldebitamount + this.todaysalelist[i].debit
            this.totalsaleamount = this.totalsaleamount + this.todaysalelist[i].debit
          }
          this.totalfeet = this.totalfeet + this.todaysalelist[i].feet
        }
      }
      else if(this.salelist==null){
        this.todaysalelist = []
      }

      // expenselist

      this.expenselist = JSON.parse(localStorage.getItem("Expense"))
      console.log(this.expenselist)
      if(this.expenselist!=null){
        this.totalexpenseamount = 0
        this.inhandamount = 0
        this.todayexpenselist = this.expenselist.filter(x=>x.date==this.date)
        for(let i=0;i<this.todayexpenselist.length;i++){
          if(this.todayexpenselist[i].amount!=undefined || this.todayexpenselist[i].amount!=null){
            this.totalexpenseamount = this.totalexpenseamount + this.todayexpenselist[i].amount
          }
        }
      }
      else if(this.expenselist==null){
        this.todayexpenselist = []
      }

      // purchaselist

      this.purchaselist = JSON.parse(localStorage.getItem("Purchase"))
      console.log(this.purchaselist)
      if(this.purchaselist!=null){
        this.totalpurchaseamount = 0
        this.todaypurchaselist = this.purchaselist.filter(x=>x.date==this.date)
        for(let i=0;i<this.todaypurchaselist.length;i++){
          if(this.todaypurchaselist[i].amount!=undefined || this.todaypurchaselist[i].amount!=null){
            this.totalpurchaseamount = this.totalpurchaseamount + this.todaypurchaselist[i].amount
          }
        }
      }
      else if(this.purchaselist==null){
        this.todaypurchaselist = []
      }
      this.inhandamount = this.totaldebitamount - (this.totalexpenseamount + this.totalpurchaseamount)
      if(this.inhandamount<=0){
        this.shortage = (this.totalexpenseamount + this.totalpurchaseamount) - this.totaldebitamount
        this.inhandamount = 0
      }
      else if(this.inhandamount>0){
        this.shortage = 0
      }
    }
    GetRepportBasedOnDate(){
      this.date = this.formatDate(this.selecteddate)

      // salelist

      if(this.salelist!=null){
        this.todaysalelist = this.salelist.filter(x=>x.date==this.date)
        this.totalsaleamount = 0
        this.totalcreditamount = 0
        this.totaldebitamount = 0
        this.totalfeet = 0
        for(let i=0;i<this.todaysalelist.length;i++){
          if(this.todaysalelist[i].credit!=null || this.todaysalelist[i].credit!=undefined){
            this.totalcreditamount = this.totalcreditamount + this.todaysalelist[i].credit
            this.totalsaleamount = this.totalsaleamount + this.todaysalelist[i].credit
          }
          if(this.todaysalelist[i].debit!=null || this.todaysalelist[i].debit!=undefined){
            this.totaldebitamount = this.totaldebitamount + this.todaysalelist[i].debit
            this.totalsaleamount = this.totalsaleamount + this.todaysalelist[i].debit
          }
          this.totalfeet = this.totalfeet + this.todaysalelist[i].feet
        }
      }
      else if(this.salelist==null){
        this.todaysalelist = []
      }

      // expenselist

      if(this.expenselist!=null){
        this.totalexpenseamount = 0
        this.inhandamount = 0
        this.todayexpenselist = this.expenselist.filter(x=>x.date==this.date)
        for(let i=0;i<this.todayexpenselist.length;i++){
          if(this.todayexpenselist[i].amount!=undefined || this.todayexpenselist[i].amount!=null){
            this.totalexpenseamount = this.totalexpenseamount + this.todayexpenselist[i].amount
          }
        }
      }
      else if(this.expenselist==null){
        this.todayexpenselist = []
      }

      //purchaselist

      this.purchaselist = JSON.parse(localStorage.getItem("Purchase"))
      console.log(this.purchaselist)
      if(this.purchaselist!=null){
        this.totalpurchaseamount = 0
        this.todaypurchaselist = this.purchaselist.filter(x=>x.date==this.date)
        for(let i=0;i<this.todaypurchaselist.length;i++){
          if(this.todaypurchaselist[i].amount!=undefined || this.todaypurchaselist[i].amount!=null){
            this.totalpurchaseamount = this.totalpurchaseamount + this.todaypurchaselist[i].amount
          }
        }
      }
      else if(this.purchaselist==null){
        this.todaypurchaselist = []
      }
      this.inhandamount = this.totaldebitamount - (this.totalexpenseamount + this.totalpurchaseamount)
      if(this.inhandamount<=0){
        this.shortage = (this.totalexpenseamount + this.totalpurchaseamount) - this.totaldebitamount
        this.inhandamount = 0
      }
      else if(this.inhandamount>0){
        this.shortage = 0
      }
    }
    DisplayBack(){
      if(this.table==1){
        this.table = 3
      }
      else if(this.table==2){
        this.table = 1
      }
      else if(this.table==3){
        this.table = 2
      }

    }
    DisplayNext(){
      if(this.table==1){
        this.table = 2
      }
      else if(this.table==2){
        this.table = 3
      }
      else if(this.table==3){
        this.table = 1
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
    formatDate(date) {
      var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();
      if (month.length < 2) month = '0' + month;
      if (day.length < 2) day = '0' + day;
  
      return [day, month, year].join('-');
    }
    FormatTime(time) {
      var d = new Date(time),
        hours = '' + (d.getHours()),
        minutes = '' + d.getMinutes(),
        seconds = d.getSeconds();
    
    
      if (hours.length < 2) hours = '0' + hours;
      if (minutes.length < 2) minutes = '0' + minutes;
    
    
      return [hours, minutes].join(':');
    }
  
  
    ngOnInit() {
    }
  
  }
