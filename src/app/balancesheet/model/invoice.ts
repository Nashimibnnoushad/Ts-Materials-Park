import { Invoiceamountdetailslist } from "./invoiceamountdetailslist";
import { InvoiceAmountRecieved } from './invoiceamountrecieved';

export class Invoice{
    invoicedate:string
    InvoiceNumber:string
    IncomeCategory:string
    Company:string
    GstNo:string
    UniqueId:string
    // invoiceAmountDetails:InvoiceAmountDetailslist[] = new Array()
    GrandTotal:number
    Total:number
    Adjusment:number
    invoiceAmountdetailslist:Invoiceamountdetailslist[] = new Array
    invoiceamountrecieveddetails:InvoiceAmountRecieved[] = new Array
    isgenerated:boolean
    AmountPaid:number
    BalanceAmount:number
    isdeleted:true
    departmentId:string
}