import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
import { AdminUser } from 'src/app/user/models/user';
import { Tsledger } from 'src/app/model/tsledger';
import { Tsitem } from 'src/app/model/tsitem';
import { Dailysale } from 'src/app/model/dailysale';
import { Tsaddexpense } from 'src/app/model/tsaddexpense';
import { Tsvehicle } from 'src/app/model/tsvehicle';
import { Tsexpenseledger } from 'src/app/model/tsexpenseledger';
import { Tspurchase } from 'src/app/model/tspurchase';
type AOA = any[][];
@Component({
  selector: 'app-tsbackup',
  templateUrl: './tsbackup.component.html',
  styleUrls: ['./tsbackup.component.css']
})
export class TsbackupComponent implements OnInit {
  isAuthenticityChecked
  tablelist
  data: AOA = [];
  wopts: XLSX.WritingOptions = { bookType: 'xlsx', type: 'array' };
  fileName = []
  filelist = []
  Importuserlist = []
  Importledgerlist = []
  Importitemlist = []
  Importdailysalelist = []
  Importexpenselist = []
  Importvehicleslist = []
  Importexpenseledgerslist = []
  Importpurchaselist = []
  Sheetnamelist = []
  userList: AdminUser[] = [];
  ledgerList: Tsledger[] = [];
  itemList: Tsitem[] = [];
  salelist: Dailysale[] = []
  expenselist: Tsaddexpense[] = []
  vehiclelist: Tsvehicle[] = []
  expenseledgerlist: Tsexpenseledger[] = []
  purchaselist: Tspurchase[] = []
  table /* 1 for export 2 for clear 3 for import */
  constructor() {
    this.isAuthenticityChecked = true
    this.table = 1
    this.tablelist = [{ "ID": 1, "name": 'User' }, { "ID": 2, "name": 'Ledger' }, { "ID": 3, "name": 'Item' },
    { "ID": 4, "name": 'Daily Sales' }, { "ID": 5, "name": 'Expense' }, { "ID": 6, "name": 'Vehicles' },
    { "ID": 7, "name": 'Expense Ledgers' }, { "ID": 8, "name": 'Purchase' },]

    this.userList = JSON.parse(localStorage.getItem("User"))
    this.ledgerList = JSON.parse(localStorage.getItem("Ledger"))
    this.itemList = JSON.parse(localStorage.getItem("Item"))
    this.salelist = JSON.parse(localStorage.getItem("DailySales"))
    this.expenselist = JSON.parse(localStorage.getItem("Expense"))
    this.vehiclelist = JSON.parse(localStorage.getItem("Vehicles"))
    this.expenseledgerlist = JSON.parse(localStorage.getItem("ExpenseLedgers"))
    this.purchaselist = JSON.parse(localStorage.getItem("Purchase"))
  }
  DisplayBack() {
    if (this.table == 1) {
      this.table = 3
    }
    else if (this.table == 2) {
      this.table = 1
    }
    else if (this.table == 3) {
      this.table = 2
    }

  }
  DisplayNext() {
    if (this.table == 1) {
      this.table = 2
    }
    else if (this.table == 2) {
      this.table = 3
    }
    else if (this.table == 3) {
      this.table = 1
    }
  }
  Export(index) {
    if (index == 0) {
      this.ExportUserList(this.userList)
    }
    else if (index == 1) {
      this.ExportLedgerList(this.ledgerList)
    }
    else if (index == 2) {
      this.ExportItemList(this.itemList)
    }
    else if (index == 3) {
      this.ExportDailySaleList(this.salelist)
    }
    else if (index == 4) {
      this.ExportExpenseList(this.expenselist)
    }
    else if (index == 5) {
      this.ExportVehiclesList(this.vehiclelist)
    }
    else if (index == 6) {
      this.ExportExpenseLedgersList(this.expenseledgerlist)
    }
    else if (index == 7) {
      this.ExportPurchaseList(this.purchaselist)
    }
  }
  ExportUserList(jsonData: any[]) {
    let wb: XLSX.WorkBook = XLSX.utils.book_new();
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(jsonData);
    XLSX.utils.book_append_sheet(wb, ws, 'Userlist');
    XLSX.writeFile(wb, 'Userlist.xlsx');
  }
  ExportLedgerList(jsonData: any[]) {
    let wb: XLSX.WorkBook = XLSX.utils.book_new();
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(jsonData);
    XLSX.utils.book_append_sheet(wb, ws, 'Ledgerlist');
    XLSX.writeFile(wb, 'Ledgerlist.xlsx');
  }
  ExportItemList(jsonData: any[]) {
    let wb: XLSX.WorkBook = XLSX.utils.book_new();
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(jsonData);
    XLSX.utils.book_append_sheet(wb, ws, 'Itemlist');
    XLSX.writeFile(wb, 'Itemlist.xlsx');
  }
  ExportDailySaleList(jsonData: any[]) {
    let wb: XLSX.WorkBook = XLSX.utils.book_new();
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(jsonData);
    XLSX.utils.book_append_sheet(wb, ws, 'DailySalelist');
    XLSX.writeFile(wb, 'Dailysale.xlsx');
  }
  ExportExpenseList(jsonData: any[]) {
    let wb: XLSX.WorkBook = XLSX.utils.book_new();
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(jsonData);
    XLSX.utils.book_append_sheet(wb, ws, 'Expenselist');
    XLSX.writeFile(wb, 'Expenselist.xlsx');
  }
  ExportVehiclesList(jsonData: any[]) {
    let wb: XLSX.WorkBook = XLSX.utils.book_new();
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(jsonData);
    XLSX.utils.book_append_sheet(wb, ws, 'Vehiclelist');
    XLSX.writeFile(wb, 'Vehiclelist.xlsx');
  }
  ExportExpenseLedgersList(jsonData: any[]) {
    let wb: XLSX.WorkBook = XLSX.utils.book_new();
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(jsonData);
    XLSX.utils.book_append_sheet(wb, ws, 'ExpenseLedgerslist');
    XLSX.writeFile(wb, 'Expenseledgerlist.xlsx');
  }
  ExportPurchaseList(jsonData: any[]) {
    let wb: XLSX.WorkBook = XLSX.utils.book_new();
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(jsonData);
    XLSX.utils.book_append_sheet(wb, ws, 'Purchaselist');
    XLSX.writeFile(wb, 'Purchaselist.xlsx');
  }
  Clearall() {
    localStorage.clear();
    alert('All datas are cleared')
  }
  Clear(index) {
    if (index == 0) {
      localStorage.removeItem('User');
      alert('User data cleared')
    }
    else if (index == 1) {
      localStorage.removeItem('Ledger');
      alert('Ledger data cleared')
    }
    else if (index == 2) {
      localStorage.removeItem('Item');
      alert('Item data cleared')
    }
    else if (index == 3) {
      localStorage.removeItem('DailySales');
      alert('Daily Sales data cleared')
    }
    else if (index == 4) {
      localStorage.removeItem('Expense');
      alert('Expense data cleared')
    }
    else if (index == 5) {
      localStorage.removeItem('Vehicles');
      alert('Vehicles data cleared')
    }
    else if (index == 6) {
      localStorage.removeItem('ExpenseLedgers');
      alert('Expense Ledgers data cleared')
    }
    else if (index == 7) {
      localStorage.removeItem('Purchase');
      alert('Purchase data cleared')
    }
  }
  onFileChange(evt: any, index) {
    if (index == 0) {
      this.Importuserlist = []
      const target: DataTransfer = <DataTransfer>(evt.target);
      if (target.files.length !== 1) throw new Error('Cannot use multiple files');
      const reader: FileReader = new FileReader();
      reader.onload = (e: any) => {
        const bstr: string = e.target.result;
        const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });
        this.filelist = wb.SheetNames
        for (let i = 0; i < this.filelist.length; i++) {
          this.fileName = []
          const wsname: string = wb.SheetNames[i];
          this.fileName.push(wsname)
          const ws: XLSX.WorkSheet = wb.Sheets[wsname];
          this.data = <AOA>(XLSX.utils.sheet_to_json(ws, { header: 1 }));
          this.Importuserlist.push(this.data)
        }
      };
      reader.readAsBinaryString(target.files[0]);
    }
    else if (index == 1) {
      this.Importledgerlist = []
      const target: DataTransfer = <DataTransfer>(evt.target);
      if (target.files.length !== 1) throw new Error('Cannot use multiple files');
      const reader: FileReader = new FileReader();
      reader.onload = (e: any) => {
        const bstr: string = e.target.result;
        const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });
        this.filelist = wb.SheetNames
        for (let i = 0; i < this.filelist.length; i++) {
          this.fileName = []
          const wsname: string = wb.SheetNames[i];
          this.fileName.push(wsname)
          const ws: XLSX.WorkSheet = wb.Sheets[wsname];
          this.data = <AOA>(XLSX.utils.sheet_to_json(ws, { header: 1 }));
          this.Importledgerlist.push(this.data)
        }
      };
      reader.readAsBinaryString(target.files[0]);
    }
    else if (index == 2) {
      this.Importitemlist = []
      const target: DataTransfer = <DataTransfer>(evt.target);
      if (target.files.length !== 1) throw new Error('Cannot use multiple files');
      const reader: FileReader = new FileReader();
      reader.onload = (e: any) => {
        const bstr: string = e.target.result;
        const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });
        this.filelist = wb.SheetNames
        for (let i = 0; i < this.filelist.length; i++) {
          this.fileName = []
          const wsname: string = wb.SheetNames[i];
          this.fileName.push(wsname)
          const ws: XLSX.WorkSheet = wb.Sheets[wsname];
          this.data = <AOA>(XLSX.utils.sheet_to_json(ws, { header: 1 }));
          this.Importitemlist.push(this.data)
        }
      };
      reader.readAsBinaryString(target.files[0]);
    }
    else if (index == 3) {
      this.Importdailysalelist = []
      const target: DataTransfer = <DataTransfer>(evt.target);
      if (target.files.length !== 1) throw new Error('Cannot use multiple files');
      const reader: FileReader = new FileReader();
      reader.onload = (e: any) => {
        const bstr: string = e.target.result;
        const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });
        this.filelist = wb.SheetNames
        for (let i = 0; i < this.filelist.length; i++) {
          this.fileName = []
          const wsname: string = wb.SheetNames[i];
          this.fileName.push(wsname)
          const ws: XLSX.WorkSheet = wb.Sheets[wsname];
          this.data = <AOA>(XLSX.utils.sheet_to_json(ws, { header: 1 }));
          this.Importdailysalelist.push(this.data)
        }
      };
      reader.readAsBinaryString(target.files[0]);
    }
    else if (index == 4) {
      this.Importexpenselist = []
      const target: DataTransfer = <DataTransfer>(evt.target);
      if (target.files.length !== 1) throw new Error('Cannot use multiple files');
      const reader: FileReader = new FileReader();
      reader.onload = (e: any) => {
        const bstr: string = e.target.result;
        const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });
        this.filelist = wb.SheetNames
        for (let i = 0; i < this.filelist.length; i++) {
          this.fileName = []
          const wsname: string = wb.SheetNames[i];
          this.fileName.push(wsname)
          const ws: XLSX.WorkSheet = wb.Sheets[wsname];
          this.data = <AOA>(XLSX.utils.sheet_to_json(ws, { header: 1 }));
          this.Importexpenselist.push(this.data)
        }
      };
      reader.readAsBinaryString(target.files[0]);
    }
    else if (index == 5) {
      this.Importvehicleslist = []
      const target: DataTransfer = <DataTransfer>(evt.target);
      if (target.files.length !== 1) throw new Error('Cannot use multiple files');
      const reader: FileReader = new FileReader();
      reader.onload = (e: any) => {
        const bstr: string = e.target.result;
        const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });
        this.filelist = wb.SheetNames
        for (let i = 0; i < this.filelist.length; i++) {
          this.fileName = []
          const wsname: string = wb.SheetNames[i];
          this.fileName.push(wsname)
          const ws: XLSX.WorkSheet = wb.Sheets[wsname];
          this.data = <AOA>(XLSX.utils.sheet_to_json(ws, { header: 1 }));
          this.Importvehicleslist.push(this.data)
        }
      };
      reader.readAsBinaryString(target.files[0]);
    }
    else if (index == 6) {
      this.Importexpenseledgerslist = []
      const target: DataTransfer = <DataTransfer>(evt.target);
      if (target.files.length !== 1) throw new Error('Cannot use multiple files');
      const reader: FileReader = new FileReader();
      reader.onload = (e: any) => {
        const bstr: string = e.target.result;
        const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });
        this.filelist = wb.SheetNames
        for (let i = 0; i < this.filelist.length; i++) {
          this.fileName = []
          const wsname: string = wb.SheetNames[i];
          this.fileName.push(wsname)
          const ws: XLSX.WorkSheet = wb.Sheets[wsname];
          this.data = <AOA>(XLSX.utils.sheet_to_json(ws, { header: 1 }));
          this.Importexpenseledgerslist.push(this.data)
        }
      };
      reader.readAsBinaryString(target.files[0]);
    }
    else if (index == 7) {
      this.Importpurchaselist = []
      const target: DataTransfer = <DataTransfer>(evt.target);
      if (target.files.length !== 1) throw new Error('Cannot use multiple files');
      const reader: FileReader = new FileReader();
      reader.onload = (e: any) => {
        const bstr: string = e.target.result;
        const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });
        this.filelist = wb.SheetNames
        for (let i = 0; i < this.filelist.length; i++) {
          this.fileName = []
          const wsname: string = wb.SheetNames[i];
          this.fileName.push(wsname)
          const ws: XLSX.WorkSheet = wb.Sheets[wsname];
          this.data = <AOA>(XLSX.utils.sheet_to_json(ws, { header: 1 }));
          this.Importpurchaselist.push(this.data)
        }
      };
      reader.readAsBinaryString(target.files[0]);
    }
  }
  Import(index) {
    if (index == 0) {
      let templist = []
      templist = this.Importuserlist[0]
      let newuserlist: AdminUser[] = []
      for (let i = 1; i < templist.length; i++) {
        let user: AdminUser = new AdminUser()
        let insidelist = []
        insidelist = templist[i]
        user.userId = insidelist[0]
        user.userName = insidelist[1]
        user.password = insidelist[2]
        user.userType = insidelist[3]
        newuserlist.push(user)
      }
      localStorage.setItem("User", JSON.stringify(newuserlist));
      alert('User data imported')
    }
    else if (index == 1) {
      let templist = []
      templist = this.Importledgerlist[0]
      let newledgerlist: Tsledger[] = []
      for (let i = 1; i < templist.length; i++) {
        let ledger: Tsledger = new Tsledger()
        let insidelist = []
        insidelist = templist[i]
        ledger.amount = insidelist[0]
        ledger.ID = insidelist[1]
        ledger.name = insidelist[2]
        ledger.mobile = insidelist[3]
        ledger.address = insidelist[4]
        ledger.depositamount = insidelist[5]
        newledgerlist.push(ledger)
      }
      localStorage.setItem("Ledger", JSON.stringify(newledgerlist));
      alert('Ledger data imported')
    }
    else if (index == 2) {
      let templist = []
      templist = this.Importitemlist[0]
      let newitemlist: Tsitem[] = []
      for (let i = 1; i < templist.length; i++) {
        let item: Tsitem = new Tsitem()
        let insidelist = []
        insidelist = templist[i]
        item.ID = insidelist[0]
        item.itemName = insidelist[1]
        newitemlist.push(item)
      }
      localStorage.setItem("Item", JSON.stringify(newitemlist));
      alert('Item data imported')
    }
    else if (index == 3) {
      let templist = []
      templist = this.Importdailysalelist[0]
      let newdailysalelist: Dailysale[] = []
      for (let i = 1; i < templist.length; i++) {
        let dailysale: Dailysale = new Dailysale()
        let insidelist = []
        insidelist = templist[i]
        dailysale.ID = insidelist[0]
        dailysale.date = insidelist[1]
        dailysale.time = insidelist[2]
        dailysale.customerName = insidelist[3]
        dailysale.customerId = insidelist[4]
        dailysale.itemName = insidelist[5]
        dailysale.feet = insidelist[6]
        dailysale.credit = insidelist[7]
        dailysale.debit = insidelist[8]
        newdailysalelist.push(dailysale)
      }
      localStorage.setItem("DailySales", JSON.stringify(newdailysalelist));
      alert('Daily Sales data imported')
    }
    else if (index == 4) {
      let templist = []
      templist = this.Importexpenselist[0]
      let newexpenselist: Tsaddexpense[] = []
      for (let i = 1; i < templist.length; i++) {
        let expense: Tsaddexpense = new Tsaddexpense()
        let insidelist = []
        insidelist = templist[i]
        expense.ID = insidelist[0]
        expense.date = insidelist[1]
        expense.time = insidelist[2]
        expense.expense = insidelist[3]
        expense.amount = insidelist[4]
        expense.expenseledger = insidelist[5]
        expense.expenseledgerid = insidelist[6]
        newexpenselist.push(expense)
      }
      localStorage.setItem("Expense", JSON.stringify(newexpenselist));
      alert('Expense data imported')
    }
    else if (index == 5) {
      let templist = []
      templist = this.Importvehicleslist[0]
      let newvehiclelist: Tsvehicle[] = []
      for (let i = 1; i < templist.length; i++) {
        let vehicle: Tsvehicle = new Tsvehicle()
        let insidelist = []
        insidelist = templist[i]
        vehicle.ID = insidelist[0]
        vehicle.vehicleNumber = insidelist[1]
        newvehiclelist.push(vehicle)
      }
      localStorage.setItem("Vehicles", JSON.stringify(newvehiclelist));
      alert('Vehicles data imported')
    }
    else if (index == 6) {
      let templist = []
      templist = this.Importexpenseledgerslist[0]
      let newexpenseledgerlist: Tsexpenseledger[] = []
      for (let i = 1; i < templist.length; i++) {
        let expenseledger: Tsexpenseledger = new Tsexpenseledger()
        let insidelist = []
        insidelist = templist[i]
        expenseledger.ID = insidelist[0]
        expenseledger.expenseLedger = insidelist[1]
        expenseledger.paidamount = insidelist[2]
        newexpenseledgerlist.push(expenseledger)
      }
      localStorage.setItem("ExpenseLedgers", JSON.stringify(newexpenseledgerlist));
      alert('Expense Ledgers data imported')
    }
    else if (index == 7) {
      let templist = []
      templist = this.Importpurchaselist[0]
      let newpurchaselist: Tspurchase[] = []
      for (let i = 1; i < templist.length; i++) {
        let purchase: Tspurchase = new Tspurchase()
        let insidelist = []
        insidelist = templist[i]
        purchase.ID = insidelist[0]
        purchase.date = insidelist[1]
        purchase.time = insidelist[2]
        purchase.driverName = insidelist[3]
        purchase.vehicle = insidelist[4]
        purchase.amount = insidelist[5]
        newpurchaselist.push(purchase)
      }
      localStorage.setItem("Purchase", JSON.stringify(newpurchaselist));
      alert('Purchase data imported')
    }
  }
  ngOnInit() {
  }

}
