export class Income
{
    todaydate:string;
    IncomeCategory:string;
    Company:string;
    InvoiceNumber:string;
    Rate:number;
    Quantity:number;
    Amount:number;
    Remark:string;
    Description:string;
    UniqueId:string;
    isChecked:boolean;
    BankName:string
    AccountNo:number
    GstNo:string
    ChequeNo:string
    UtrNo:string
    paymentMode:string
    incomeVerifiedId = new Array<any>()
    isdelete:boolean
    departmentId:string
    addeddate:string
}
export class excelData{

    incomeDate:string;
    incomeCategory:string;
    incomeAmount:number;
    expenseDate:string;
    expenseCategory:string
    expenseAmount:string
}