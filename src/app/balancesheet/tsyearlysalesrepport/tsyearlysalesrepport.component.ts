import { Component, OnInit } from '@angular/core';
import { Tsyearlyrepport } from 'src/app/model/tsmonthlyrepport';
import { Tspurchase } from 'src/app/model/tspurchase';
import { Tsaddexpense } from 'src/app/model/tsaddexpense';
import { Dailysale } from 'src/app/model/dailysale';

@Component({
  selector: 'app-tsyearlysalesrepport',
  templateUrl: './tsyearlysalesrepport.component.html',
  styleUrls: ['./tsyearlysalesrepport.component.css']
})
export class TsyearlysalesrepportComponent implements OnInit {
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
  searchmonth
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
  Yearlysalelist:Dailysale[]=[]
  Yearlypurchaselist:Tspurchase[]=[]
  Yearlyexpenselist:Tsaddexpense[]=[]
  SearchDailylist:Dailysale[]=[]
  SearchExpenselist:Tsaddexpense[]=[]
  SearchPurchaselist:Tspurchase[]=[]
  Yearlylist:Tsyearlyrepport[]=[]
  constructor() {
    this.isAuthenticityChecked = true
    let d = new Date()
    this.date = this.formatDate(d)
    // this.month = this.date.slice(3,5)
    this.year = this.date.slice(6)
    console.log(this.displaymonth)
    console.log(this.month)
    this.salelist = JSON.parse(localStorage.getItem("DailySales"))
    this.expenselist = JSON.parse(localStorage.getItem("Expense"))
    this.purchaselist = JSON.parse(localStorage.getItem("Purchase"))
    this.Yearlysalelist = this.salelist.filter(x=>x.date.slice(6)==this.year)
    this.Yearlyexpenselist = this.expenselist.filter(x=>x.date.slice(6)==this.year)
    this.Yearlypurchaselist = this.purchaselist.filter(x=>x.date.slice(6)==this.year)
    this.totalsale = 0
    this.totalfeet = 0
    this.totalcredit = 0
    this.totaldebit = 0
    this.totalexpense = 0
    this.totalpurchase = 0
    for(let i=1;i<=12;i++){
      let monthrepport: Tsyearlyrepport=new Tsyearlyrepport()
      if(i<10){
        this.searchmonth = '0'+i
        }
        else if(i>9){
         this.searchmonth = i
        }
        monthrepport.month = this.GetMonthname(this.searchmonth)
        monthrepport.sale=0
        monthrepport.feet=0
        monthrepport.credit=0
        monthrepport.debit=0
        monthrepport.purchase=0
        monthrepport.expense=0
        this.SearchDailylist = this.Yearlysalelist.filter(x=>x.date.slice(3,5)==this.searchmonth)
        if(this.SearchDailylist.length!=0||this.SearchDailylist!=null||this.SearchDailylist!=undefined){
        for(let i=0;i<this.SearchDailylist.length;i++){
          if(this.SearchDailylist[i].debit!=null || this.SearchDailylist[i].debit!=undefined){
            monthrepport.debit = monthrepport.debit + this.SearchDailylist[i].debit
            monthrepport.sale = monthrepport.sale + this.SearchDailylist[i].debit
          }
          if(this.SearchDailylist[i].credit!=null || this.SearchDailylist[i].credit!=undefined){
            monthrepport.credit = monthrepport.credit + this.SearchDailylist[i].credit
            monthrepport.sale = monthrepport.sale + this.SearchDailylist[i].credit
          }
          monthrepport.feet = monthrepport.feet + this.SearchDailylist[i].feet
        }
      }
      this.SearchExpenselist = this.Yearlyexpenselist.filter(x=>x.date.slice(3,5)==this.searchmonth)
      if(this.SearchExpenselist.length!=0||this.SearchExpenselist!=null||this.SearchExpenselist!=undefined){
        for(let i=0;i<this.SearchExpenselist.length;i++){
          monthrepport.expense = monthrepport.expense + this.SearchExpenselist[i].amount
        }
      }
      this.SearchPurchaselist = this.Yearlypurchaselist.filter(x=>x.date.slice(3,5)==this.searchmonth)
      if(this.SearchPurchaselist.length!=0||this.SearchPurchaselist!=null||this.SearchPurchaselist!=undefined){
        for(let i=0;i<this.SearchPurchaselist.length;i++){
          monthrepport.purchase = monthrepport.purchase + this.SearchPurchaselist[i].amount
        }
      }
      this.Yearlylist.push(monthrepport)
    }

    for(let i=0;i<this.Yearlylist.length;i++){
      this.totalsale = this.totalsale + this.Yearlylist[i].sale
      this.totalfeet = this.totalfeet + this.Yearlylist[i].feet
      this.totalcredit = this.totalcredit + this.Yearlylist[i].credit
      this.totaldebit = this.totaldebit + this.Yearlylist[i].debit
      this.totalexpense = this.totalexpense + this.Yearlylist[i].expense
      this.totalpurchase = this.totalpurchase + this.Yearlylist[i].purchase
    }
   }
   GetRepportBasedOnYear(){
    this.Yearlylist = []
    this.totalsale = 0
    this.totalfeet = 0
    this.totalcredit = 0
    this.totaldebit = 0
    this.totalexpense = 0
    this.totalpurchase = 0
    this.Yearlysalelist = this.salelist.filter(x=>x.date.slice(6)==this.year)
    this.Yearlyexpenselist = this.expenselist.filter(x=>x.date.slice(6)==this.year)
    this.Yearlypurchaselist = this.purchaselist.filter(x=>x.date.slice(6)==this.year)
    for(let i=1;i<=12;i++){
      let monthrepport: Tsyearlyrepport=new Tsyearlyrepport()
      if(i<10){
        this.searchmonth = '0'+i
        }
        else if(i>9){
         this.searchmonth = i
        }
        monthrepport.month = this.GetMonthname(this.searchmonth)
        monthrepport.sale=0
        monthrepport.feet=0
        monthrepport.credit=0
        monthrepport.debit=0
        monthrepport.purchase=0
        monthrepport.expense=0
        this.SearchDailylist = this.Yearlysalelist.filter(x=>x.date.slice(3,5)==this.searchmonth)
        if(this.SearchDailylist.length!=0||this.SearchDailylist!=null||this.SearchDailylist!=undefined){
        for(let i=0;i<this.SearchDailylist.length;i++){
          if(this.SearchDailylist[i].debit!=null || this.SearchDailylist[i].debit!=undefined){
            monthrepport.debit = monthrepport.debit + this.SearchDailylist[i].debit
            monthrepport.sale = monthrepport.sale + this.SearchDailylist[i].debit
          }
          if(this.SearchDailylist[i].credit!=null || this.SearchDailylist[i].credit!=undefined){
            monthrepport.credit = monthrepport.credit + this.SearchDailylist[i].credit
            monthrepport.sale = monthrepport.sale + this.SearchDailylist[i].credit
          }
          monthrepport.feet = monthrepport.feet + this.SearchDailylist[i].feet
        }
      }
      this.SearchExpenselist = this.Yearlyexpenselist.filter(x=>x.date.slice(3,5)==this.searchmonth)
      if(this.SearchExpenselist.length!=0||this.SearchExpenselist!=null||this.SearchExpenselist!=undefined){
        for(let i=0;i<this.SearchExpenselist.length;i++){
          monthrepport.expense = monthrepport.expense + this.SearchExpenselist[i].amount
        }
      }
      this.SearchPurchaselist = this.Yearlypurchaselist.filter(x=>x.date.slice(3,5)==this.searchmonth)
      if(this.SearchPurchaselist.length!=0||this.SearchPurchaselist!=null||this.SearchPurchaselist!=undefined){
        for(let i=0;i<this.SearchPurchaselist.length;i++){
          monthrepport.purchase = monthrepport.purchase + this.SearchPurchaselist[i].amount
        }
      }
      this.Yearlylist.push(monthrepport)
    }

    for(let i=0;i<this.Yearlylist.length;i++){
      this.totalsale = this.totalsale + this.Yearlylist[i].sale
      this.totalfeet = this.totalfeet + this.Yearlylist[i].feet
      this.totalcredit = this.totalcredit + this.Yearlylist[i].credit
      this.totaldebit = this.totaldebit + this.Yearlylist[i].debit
      this.totalexpense = this.totalexpense + this.Yearlylist[i].expense
      this.totalpurchase = this.totalpurchase + this.Yearlylist[i].purchase
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
