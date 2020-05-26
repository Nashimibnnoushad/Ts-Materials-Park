import { Banksettings } from "./banksettings";

export class Expense
{
    todaydate:string;
    ExpenseCategory:string;
    Company:string;
    BillNumber:string;
    Rate:number;
    Quantity:number;
    Amount:number;
    Remark:string;
    Description:string;
    UniqueId:string;
    // AccountNo:number;
    Gst:string;
    bankdetailsId : string;
    expenseVerifiedId = new Array<any>()
    departmentId:string
    isChecked:boolean
    addeddate:string
}

export class ExpenseList{
    expense: Expense= new Expense;
    bankdetails : Banksettings = new Banksettings;
}