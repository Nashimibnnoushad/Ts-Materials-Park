import { Component, OnInit } from '@angular/core';
import { Tspurchase } from 'src/app/model/tspurchase';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Tsvehicle } from 'src/app/model/tsvehicle';
import { Common } from '../model/common';

@Component({
  selector: 'app-tspurchase',
  templateUrl: './tspurchase.component.html',
  styleUrls: ['./tspurchase.component.css']
})
export class TspurchaseComponent implements OnInit {
  date
  time
  driver
  vehicle
  amount
  isAuthenticityChecked:boolean
  purchaselist:Tspurchase[]=[]
  todaypurchaselist:Tspurchase[]=[]
  templist:Tspurchase[]=[]
  vehiclelist:Tsvehicle[]=[]
    constructor(private fb: FormBuilder) {
      this.PurchaseCreateForm()
      this.isAuthenticityChecked = true
      let d = new Date()
      this.date = this.formatDate(d)
      this.purchaselist = JSON.parse(localStorage.getItem("Purchase"))
      this.vehiclelist = JSON.parse(localStorage.getItem("Vehicles"))
      console.log(this.purchaselist)
      if(this.purchaselist!=null){
        this.todaypurchaselist = this.purchaselist.filter(x=>x.date==this.date)
      }
      else if(this.purchaselist==null){
        this.todaypurchaselist = []
      }
     }
     Add(){
      let t = new Date()
      this.time = this.FormatTime(t)
      if(this.purchaselist==null){
       let uniqueId = "P" + Common.newGuid();
       let purchase:Tspurchase = new Tspurchase()
       purchase.ID = uniqueId
       purchase.date = this.date
       purchase.time = this.FormatTimeTo12(this.time)
       purchase.driverName = this.driver
       purchase.vehicle = this.vehicle
       purchase.amount = this.amount
       this.templist.push(purchase)
       localStorage.setItem("Purchase",JSON.stringify(this.templist));
       this.purchaselist = JSON.parse(localStorage.getItem('Purchase'))
       this.todaypurchaselist.push(purchase)
       this.Reset()
      }
      else if(this.purchaselist!=null){
        let uniqueId = "P" + Common.newGuid();
        let purchase:Tspurchase = new Tspurchase()
        purchase.ID = uniqueId
        purchase.date = this.date
        purchase.time = this.FormatTimeTo12(this.time)
        purchase.driverName = this.driver
        purchase.vehicle = this.vehicle
        purchase.amount = this.amount
       this.purchaselist.push(purchase)
       localStorage.setItem("Purchase",JSON.stringify(this.purchaselist));
       this.purchaselist = JSON.parse(localStorage.getItem('Purchase'))
       this.todaypurchaselist.push(purchase)
       this.Reset()
      }
     }

    Reset(){
      this.driver = null
      this.vehicle = null
      this.amount = null
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
    PurchaseForm = new FormGroup({
      driver:new FormControl(),
      amount:new FormControl(),
      vehicle:new FormControl()
    })
  
    PurchaseCreateForm(){
      this.PurchaseForm = this.fb.group({
        driver:[null,Validators.required],
        amount:[null,Validators.required],
        vehicle:[null,Validators.nullValidator]
      })
    }
  
    get Driver() {return this.PurchaseForm.get('driver')}
    get Amount() {return this.PurchaseForm.get('amount')}
    get Vehicle() {return this.PurchaseForm.get('vehicle')}
    ngOnInit() {
    }
  
  }
