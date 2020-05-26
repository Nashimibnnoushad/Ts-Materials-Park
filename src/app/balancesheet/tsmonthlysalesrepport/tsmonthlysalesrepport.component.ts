import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Dailysale, Monthlysale } from 'src/app/model/dailysale';
import { Tsaddexpense } from 'src/app/model/tsaddexpense';
import { Tspurchase } from 'src/app/model/tspurchase';
import { Tsmonthlyrepport } from 'src/app/model/tsmonthlyrepport';

@Component({
  selector: 'app-tsmonthlysalesrepport',
  templateUrl: './tsmonthlysalesrepport.component.html',
  styleUrls: ['./tsmonthlysalesrepport.component.css']
})
export class TsmonthlysalesrepportComponent implements OnInit {
  feet
  debit
  credit
  date
  month
  year
  customername
  time
  selecteddate
  inhandamount 
  shortage 
  displaymonth
  monthdays
  searchday
  totalsale:number
  totalfeet:number
  totaldebit:number
  totalcredit:number
  totalexpense:number
  totalpurchase:number
  isAuthenticityChecked:boolean
  salelist:Dailysale[]=[]
  expenselist:Tsaddexpense[]=[]
  purchaselist:Tspurchase[]=[]
  SearchDailylist:Dailysale[]=[]
  SearchExpenselist:Tsaddexpense[]=[]
  SearchPurchaselist:Tspurchase[]=[]
  Monthlylist:Tsmonthlyrepport[]=[]
    constructor(private fb: FormBuilder) { 
      this.isAuthenticityChecked = true
      let d = new Date()
      this.date = this.formatDate(d)
      this.month = this.date.slice(3,5)
      this.year = this.date.slice(6)
      this.monthdays = this.GetDaysInMonth(this.month,this.year)
      this.displaymonth = d.toLocaleString('default', { month: 'long' })
      console.log(this.displaymonth)
      console.log(this.month)
      this.salelist = JSON.parse(localStorage.getItem("DailySales"))
      this.expenselist = JSON.parse(localStorage.getItem("Expense"))
      this.purchaselist = JSON.parse(localStorage.getItem("Purchase"))
      for(let i=1;i<=this.monthdays;i++){
        let dayrepport: Tsmonthlyrepport=new Tsmonthlyrepport()
        if(i<10){
        this.searchday = '0'+i+'-'+this.month+'-'+this.year
        }
        else if(i>9){
         this.searchday = i+'-'+this.month+'-'+this.year
        }
        dayrepport.date=this.searchday
        dayrepport.sale=0
        dayrepport.feet=0
        dayrepport.credit=0
        dayrepport.debit=0
        dayrepport.purchase=0
        dayrepport.expense=0
        this.SearchDailylist = this.salelist.filter(x=>x.date==this.searchday)
        if(this.SearchDailylist.length!=0||this.SearchDailylist!=null||this.SearchDailylist!=undefined){
          for(let i =0;i<this.SearchDailylist.length;i++){
            if(this.SearchDailylist[i].debit!=null || this.SearchDailylist[i].debit!=undefined){
              dayrepport.debit = dayrepport.debit + this.SearchDailylist[i].debit
              dayrepport.sale = dayrepport.sale + this.SearchDailylist[i].debit
            }
            if(this.SearchDailylist[i].credit!=null || this.SearchDailylist[i].credit!=undefined){
              dayrepport.credit = dayrepport.credit + this.SearchDailylist[i].credit
              dayrepport.sale = dayrepport.sale + this.SearchDailylist[i].credit
            }
            dayrepport.feet = dayrepport.feet + this.SearchDailylist[i].feet
          }
        }
        this.SearchExpenselist = this.expenselist.filter(x=>x.date==this.searchday)
        if(this.SearchExpenselist.length!=0||this.SearchExpenselist!=null||this.SearchExpenselist!=undefined){
          for(let i=0;i<this.SearchExpenselist.length;i++){
            dayrepport.expense = dayrepport.expense + this.SearchExpenselist[i].amount
          }
        }
        this.SearchPurchaselist = this.purchaselist.filter(x=>x.date==this.searchday)
        if(this.SearchPurchaselist.length!=0||this.SearchPurchaselist!=null||this.SearchPurchaselist!=undefined){
          for(let i=0;i<this.SearchPurchaselist.length;i++){
            dayrepport.purchase = dayrepport.purchase + this.SearchPurchaselist[i].amount
          }
        }
        this.Monthlylist.push(dayrepport)
      }
      this.totalsale = 0
      this.totalfeet = 0
      this.totalcredit = 0
      this.totaldebit = 0
      this.totalexpense = 0
      this.totalpurchase = 0
      for(let i=0;i<this.Monthlylist.length;i++){
        this.totalsale = this.totalsale + this.Monthlylist[i].sale
        this.totalfeet = this.totalfeet + this.Monthlylist[i].feet
        this.totalcredit = this.totalcredit + this.Monthlylist[i].credit
        this.totaldebit = this.totaldebit + this.Monthlylist[i].debit
        this.totalexpense = this.totalexpense + this.Monthlylist[i].expense
        this.totalpurchase = this.totalpurchase + this.Monthlylist[i].purchase
      }
  }
  GetRepportBasedOnMonth(){
    this.monthdays = this.GetDaysInMonth(this.month,this.year)
    this.displaymonth = this.GetMonthname(this.month)
    this.Monthlylist = []
    for(let i=1;i<=this.monthdays;i++){
      let dayrepport: Tsmonthlyrepport=new Tsmonthlyrepport()
      if(i<10){
      this.searchday = '0'+i+'-'+this.month+'-'+this.year
      }
      else if(i>9){
       this.searchday = i+'-'+this.month+'-'+this.year
      }
      dayrepport.date=this.searchday
      dayrepport.sale=0
      dayrepport.feet=0
      dayrepport.credit=0
      dayrepport.debit=0
      dayrepport.purchase=0
      dayrepport.expense=0
      this.SearchDailylist = this.salelist.filter(x=>x.date==this.searchday)
      if(this.SearchDailylist.length!=0||this.SearchDailylist!=null||this.SearchDailylist!=undefined){
        for(let i =0;i<this.SearchDailylist.length;i++){
          if(this.SearchDailylist[i].debit!=null || this.SearchDailylist[i].debit!=undefined){
            dayrepport.debit = dayrepport.debit + this.SearchDailylist[i].debit
            dayrepport.sale = dayrepport.sale + this.SearchDailylist[i].debit
          }
          if(this.SearchDailylist[i].credit!=null || this.SearchDailylist[i].credit!=undefined){
            dayrepport.credit = dayrepport.credit + this.SearchDailylist[i].credit
            dayrepport.sale = dayrepport.sale + this.SearchDailylist[i].credit
          }
          dayrepport.feet = dayrepport.feet + this.SearchDailylist[i].feet
        }
      }
      this.SearchExpenselist = this.expenselist.filter(x=>x.date==this.searchday)
      if(this.SearchExpenselist.length!=0||this.SearchExpenselist!=null||this.SearchExpenselist!=undefined){
        for(let i=0;i<this.SearchExpenselist.length;i++){
          dayrepport.expense = dayrepport.expense + this.SearchExpenselist[i].amount
        }
      }
      this.SearchPurchaselist = this.purchaselist.filter(x=>x.date==this.searchday)
      if(this.SearchPurchaselist.length!=0||this.SearchPurchaselist!=null||this.SearchPurchaselist!=undefined){
        for(let i=0;i<this.SearchPurchaselist.length;i++){
          dayrepport.purchase = dayrepport.purchase + this.SearchPurchaselist[i].amount
        }
      }
      this.Monthlylist.push(dayrepport)
    }
    this.totalsale = 0
    this.totalfeet = 0
    this.totalcredit = 0
    this.totaldebit = 0
    this.totalexpense = 0
    this.totalpurchase = 0
    for(let i=0;i<this.Monthlylist.length;i++){
      this.totalsale = this.totalsale + this.Monthlylist[i].sale
      this.totalfeet = this.totalfeet + this.Monthlylist[i].feet
      this.totalcredit = this.totalcredit + this.Monthlylist[i].credit
      this.totaldebit = this.totaldebit + this.Monthlylist[i].debit
      this.totalexpense = this.totalexpense + this.Monthlylist[i].expense
      this.totalpurchase = this.totalpurchase + this.Monthlylist[i].purchase
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
  GetDaysInMonth(month,year){
    return new Date(year,month,0).getDate()
  }
  GetMonthname(value){
    if(value=='01'){
      return 'January'
    }
    else if(value=='02'){
      return 'February'
    }
    else if(value=='03'){
      return 'March'
    }
    else if(value=='04'){
      return 'April'
    }
    else if(value=='05'){
      return 'May'
    }
    else if(value=='06'){
      return 'June'
    }
    else if(value=='07'){
      return 'July'
    }
    else if(value=='08'){
      return 'August'
    }
    else if(value=='09'){
      return 'September'
    }
    else if(value=='10'){
      return 'October'
    }
    else if(value=='11'){
      return 'November'
    }
    else if(value=='12'){
      return 'December'
    }
  }
  ngOnInit() {
  }

}
