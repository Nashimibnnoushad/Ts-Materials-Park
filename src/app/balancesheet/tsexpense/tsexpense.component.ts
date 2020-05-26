import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Tsaddexpense } from 'src/app/model/tsaddexpense';
import { Tsexpenseledger } from 'src/app/model/tsexpenseledger';
import { Common } from '../model/common';

@Component({
  selector: 'app-tsexpense',
  templateUrl: './tsexpense.component.html',
  styleUrls: ['./tsexpense.component.css']
})
export class TsexpenseComponent implements OnInit {
  date
  time
  expensefield
  expenseledger
  amount
  expenseledgerhide: boolean = false
  isAuthenticityChecked: boolean
  expenselist: Tsaddexpense[] = []
  expenseledgerlist: Tsexpenseledger[] = []
  todayexpenselist: Tsaddexpense[] = []
  templist: Tsaddexpense[] = []
  constructor(private fb: FormBuilder) {
    this.ExpenseCreateForm()
    this.isAuthenticityChecked = true
    let d = new Date()
    this.date = this.formatDate(d)
    this.expenselist = JSON.parse(localStorage.getItem("Expense"))
    this.expenseledgerlist = JSON.parse(localStorage.getItem("ExpenseLedgers"))
    console.log(this.expenselist)
    if (this.expenselist != null) {
      this.todayexpenselist = this.expenselist.filter(x => x.date == this.date)
    }
    else if (this.expenselist == null) {
      this.todayexpenselist = []
    }
  }
  Add() {
    let t = new Date()
    this.time = this.FormatTime(t)
    if (this.expenselist == null) {
      let uniqueId = "E" + Common.newGuid();
      let expense: Tsaddexpense = new Tsaddexpense()
      expense.ID = uniqueId
      expense.date = this.date
      expense.time = this.FormatTimeTo12(this.time)
      expense.expense = this.expensefield
      expense.amount = this.amount
      if(this.expenseledgerhide==true){
      let tempexpenseledger: Tsexpenseledger[] = []
      tempexpenseledger = this.expenseledgerlist.filter(x => x.expenseLedger == this.expenseledger)
      expense.expenseledger = this.expenseledger
      expense.expenseledgerid = tempexpenseledger[0].ID
      }
      else if(this.expenseledgerhide==false){
        expense.expenseledger = 'undefined'
        expense.expenseledgerid = 'undefined'
      }
      this.templist.push(expense)
      localStorage.setItem("Expense", JSON.stringify(this.templist));
      this.expenselist = JSON.parse(localStorage.getItem('Expense'))
      this.todayexpenselist.push(expense)
      this.Reset()
    }
    else if (this.expenselist != null) {
      let uniqueId = "E" + Common.newGuid();
      let expense: Tsaddexpense = new Tsaddexpense()
      expense.ID = uniqueId
      expense.date = this.date
      expense.time = this.FormatTimeTo12(this.time)
      expense.expense = this.expensefield
      expense.amount = this.amount
      if(this.expenseledgerhide==true){
        let tempexpenseledger: Tsexpenseledger[] = []
        tempexpenseledger = this.expenseledgerlist.filter(x => x.expenseLedger == this.expenseledger)
        expense.expenseledger = this.expenseledger
        expense.expenseledgerid = tempexpenseledger[0].ID
        }
        else if(this.expenseledgerhide==false){
          expense.expenseledger = 'undefined'
          expense.expenseledgerid = 'undefined'
        }
      this.expenselist.push(expense)
      localStorage.setItem("Expense", JSON.stringify(this.expenselist));
      this.expenselist = JSON.parse(localStorage.getItem('Expense'))
      this.todayexpenselist.push(expense)
      this.Reset()
    }
  }
  Expenseledgerhide() {
    if (this.expensefield == "Diesel") {
      this.expenseledgerhide = true
    }
    else if (this.expensefield != "Diesel") {
      this.expenseledgerhide = false
    }
  }
  Reset() {
    this.expensefield = null
    this.expenseledger = null
    this.amount = null
    this.expenseledgerhide = false
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
  FormatTimeTo12(a) {
    return (new Date("1955-11-05T" + a + "Z")).toLocaleTimeString("bestfit", {
      timeZone: "UTC",
      hour12: !0,
      hour: "numeric",
      minute: "numeric"
    });
  };
  ExpenseForm = new FormGroup({
    exfield: new FormControl(),
    amount: new FormControl(),
    exledger: new FormControl()
  })

  ExpenseCreateForm() {
    this.ExpenseForm = this.fb.group({
      exfield: [null, Validators.required],
      amount: [null, Validators.required],
      exledger: [null, Validators.nullValidator]
    })
  }

  get Exfield() { return this.ExpenseForm.get('exfield') }
  get Amount() { return this.ExpenseForm.get('amount') }
  get Ledger() { return this.ExpenseForm.get('exledger') }
  ngOnInit() {
  }

}
