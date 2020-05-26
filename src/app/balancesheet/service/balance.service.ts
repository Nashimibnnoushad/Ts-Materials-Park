import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DbService } from './db.service';
import { IncomeCategory } from '../model/incomeCategory';
import { ExpenseCategory } from '../model/expenseCategory';
import { Income } from '../model/income';
import { Expense } from '../model/expense';
import { InvoicelastId } from '../model/invoicelastid';
import { Invoice } from '../model/invoice';

@Injectable({
  providedIn: 'root'
})
export class BalanceService {

  constructor(private http: HttpClient,
    private dbService: DbService) { }

  public AddIncomeCategory(incomecategory: IncomeCategory) {
    return this.dbService.AddRow(incomecategory, 'incomeCategoryName')
  }

  public GetIncomeCategory() {
    return this.dbService.GetRows('incomeCategoryName')
  }

  public AddExpenseCategory(expensecategory: ExpenseCategory) {
    return this.dbService.AddRow(expensecategory, 'expenseCategoryName')
  }

  public GetExpenseCategory() {
    return this.dbService.GetRows('expenseCategoryName')
  }

  public AddIncome(income: Income) {
    return this.dbService.AddRow(income, 'income')
  }

  public GetIncome() {
    return this.dbService.GetRows('income')
  }

  public AddExpense(expense: Expense) {
    return this.dbService.AddRow(expense, 'expense')
  }

  public GetExpense() {
    return this.dbService.GetRows('expense')
  }

  public AddRepIncome(income: Income) {
    return this.dbService.AddRow(income, 'RepIncome')
  }

  public GetRepIncome() {
    return this.dbService.GetRows('RepIncome')
  }

  public UpdateRepIncome(income: Income) {
    let wherebody = {
      "UniqueId": income.UniqueId
    }
    let data = {
      "IncomeCategory": income.IncomeCategory, "todaydate": income.todaydate,
      "Company": income.Company, "InvoiceNumber": income.InvoiceNumber, "Amount": income.Amount,
      "Description": income.Description, "Remark": income.Remark,
    }
    return this.dbService.UpdateRows('RepIncome', data, wherebody)
  }

  public AddRepExpense(expense: Expense) {
    return this.dbService.AddRow(expense, 'RepExpense')
  }

  public GetRepExpense() {
    return this.dbService.GetRows('RepExpense')
  }

  public UpdateRepExpense(expense: Expense) {
    let wherebody = {
      "UniqueId": expense.UniqueId
    }
    let data = {
      "ExpenseCategory": expense.ExpenseCategory, "todaydate": expense.todaydate,
      "Company": expense.Company, "BillNumber": expense.BillNumber, "Amount": expense.Amount,
      "Description": expense.Description, "Remark": expense.Remark,
    }
    return this.dbService.UpdateRows('RepExpense', data, wherebody)
  }

  public UpdateIncome(income: Income) {
    let wherebody = {
      "UniqueId": income.UniqueId
    }
    let data = {
      "incomeVerifiedId": income.incomeVerifiedId
     
    }
    return this.dbService.UpdateRows('income', data, wherebody)
  }
  public UpdateExpense(expense: Expense) {
    let wherebody = {
      "UniqueId": expense.UniqueId
    }
    let data = {
      "expenseVerifiedId": expense.expenseVerifiedId
     
    }
    return this.dbService.UpdateRows('expense', data, wherebody)
  }
  public updatelastid(invoice:InvoicelastId){
    let wherebody = {
      "UniqueId":invoice.UniqueId
    }
    let data = {
      "InvoiceNo":invoice.InvoiceNo
    }
    return this.dbService.UpdateRows('Invoicelastid',data,wherebody)
   }
   public getinvoiceedit(id) {
    let wherbody = {
      "UniqueId":id
    }
     return this.dbService.GetRows("Invoice",wherbody)
   }
   public updateinvoice(invoice:Invoice){
     let data = {
       "Adjusment":invoice.Adjusment,"Company":invoice.Company,
       "GrandTotal":invoice.GrandTotal,"GstNo":invoice.GstNo,
       "IncomeCategory":invoice.IncomeCategory,"invoicedate":invoice.invoicedate,
       "Total":invoice.Total,"isgenerated":invoice.isgenerated
     }
     let wherebody = {
       "UniqueId":invoice.UniqueId
     }
     return this.dbService.UpdateRows('Invoice',data,wherebody)   
   }
   public getincomeedit(id){
     let wherebody = {
       "UniqueId":id
     }
     return this.dbService.GetRows('income',wherebody)
   }
   public updateincome(income:Income){
     let data = {
       "AccountNo":income.AccountNo,"Amount":income.Amount,
       "BankName":income.BankName,"ChequeNo":income.ChequeNo,
       "Company":income.Company,"Description":income.Description,
       "GstNo":income.GstNo,"IncomeCategory":income.IncomeCategory,
       "Remark":income.Remark,"UtrNo":income.UtrNo,
       "paymentMode":income.paymentMode,"todaydate":income.todaydate,
       "Rate":income.Rate,"Quantity":income.Quantity
     }
     let wherebody = {
       "UniqueId":income.UniqueId
     }
     return this.dbService.UpdateRows('income',data,wherebody)
   }
 
}
