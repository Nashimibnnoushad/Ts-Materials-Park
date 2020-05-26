import { Component, OnInit } from '@angular/core';
import { Tsledger } from 'src/app/model/tsledger';
import { Tsitem } from 'src/app/model/tsitem';
import { Dailysale } from 'src/app/model/dailysale';
import { Common } from '../model/common';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-dailysale',
  templateUrl: './dailysale.component.html',
  styleUrls: ['./dailysale.component.css']
})
export class DailysaleComponent implements OnInit {
ledger
item
feet
debit = 0
credit = 0
date
customername
time
isAuthenticityChecked:boolean
ledgerlist:Tsledger[]=[]
templedgerlist:Tsledger[]=[]
itemlist:Tsitem[]=[]
salelist:Dailysale[]=[]
todaysalelist:Dailysale[]=[]
templist:Dailysale[]=[]
ledgerhide:boolean 
  constructor(private fb: FormBuilder) { 
    this.SaleCreateForm()
    this.isAuthenticityChecked = true
    let d = new Date()
    this.date = this.formatDate(d)
    this.Selected("2")
    this.ledgerlist = JSON.parse(localStorage.getItem("Ledger"))
    this.itemlist = JSON.parse(localStorage.getItem("Item"))
    this.salelist = JSON.parse(localStorage.getItem("DailySales"))
    console.log(this.salelist)
    if(this.salelist!=null){
      this.todaysalelist = this.salelist.filter(x=>x.date==this.date)
    }
    else if(this.salelist==null){
      this.todaysalelist = []
    }
  }
  Selected(value){
   if(value=="1"){
     this.ledgerhide = true
   }
   else if(value=="2"){
     this.ledgerhide = false
   }

  }
  Add(){
   let t = new Date()
   this.time = this.FormatTime(t)
   if(this.salelist==null){
    let uniqueId = "S" + Common.newGuid();
    let sale:Dailysale = new Dailysale()
    sale.ID = uniqueId
    sale.date = this.date
    sale.time = this.FormatTimeTo12(this.time)
    sale.customerName = this.customername
    if(this.ledgerhide!=true){
      this.templedgerlist = this.ledgerlist.filter(x=>x.name==this.customername)
      sale.customerId = this.templedgerlist[0].ID
    }
    if(this.ledgerhide==true){
      sale.customerId = 'notledger'
    }
    sale.itemName = this.item
    sale.feet = this.feet
    sale.credit = this.credit
    sale.debit = this.debit
    this.templist.push(sale)
    localStorage.setItem("DailySales",JSON.stringify(this.templist));
    this.salelist = JSON.parse(localStorage.getItem('DailySales'))
    this.todaysalelist.push(sale)
    this.Reset()
   }
   else if(this.salelist!=null){
    let uniqueId = "S" + Common.newGuid();
    let sale:Dailysale = new Dailysale()
    sale.ID = uniqueId
    sale.date = this.date
    sale.time = this.FormatTimeTo12(this.time)
    sale.customerName = this.customername
    if(this.ledgerhide!=true){
      this.templedgerlist = this.ledgerlist.filter(x=>x.name==this.customername)
      sale.customerId = this.templedgerlist[0].ID
    }
    if(this.ledgerhide==true){
      sale.customerId = 'notledger'
    }
    sale.itemName = this.item
    sale.feet = this.feet
    sale.credit = this.credit
    sale.debit = this.debit
    this.salelist.push(sale)
    localStorage.setItem("DailySales",JSON.stringify(this.salelist));
    this.salelist = JSON.parse(localStorage.getItem('DailySales'))
    this.todaysalelist.push(sale)
    this.Reset()
   }
  }
  Reset(){
    this.customername = null
    this.item = null
    this.feet = null
    this.debit = 0
    this.credit = 0
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
  FormatTimeTo12(a){
    return (new Date("1955-11-05T" + a + "Z")).toLocaleTimeString("bestfit", {
        timeZone: "UTC",
        hour12: !0,
        hour: "numeric",
        minute: "numeric"
    });
};
  SaleForm = new FormGroup({
    customer:new FormControl(),
    item:new FormControl(),
    feet:new FormControl(),
    amount:new FormControl(),
  })

  SaleCreateForm(){
    this.SaleForm = this.fb.group({
      customer:[null,Validators.required],
      item:[null,Validators.required],
      feet:[null,Validators.required],
      amount:[null,Validators.required],
    })
  }

  get Customer() {return this.SaleForm.get('customer')}
  get Item() {return this.SaleForm.get('item')}
  get Feet() {return this.SaleForm.get('feet')}
  get Amount(){return this.SaleForm.get('amount')}

  ngOnInit() {
  }

}
