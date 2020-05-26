import { Tspurchase } from './tspurchase'
import { Tsaddexpense } from './tsaddexpense'

export class Dailysale {
    ID:String
    date:string
    time:string
    customerName:string
    itemName:string
    feet:number
    debit:number
    credit:number
    customerId:string
}
export class Monthlysale {
totalsale:number
totalfeet:number
totaldebit:number
totalcredit:number
totalexpense:number
totalpurchase:number
}
