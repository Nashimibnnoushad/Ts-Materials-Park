import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { BalancesheetModule } from './balancesheet/balancesheet.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CookieService } from 'ngx-cookie-service';
import { UserModule } from './user/user.module';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { ExcelService } from './excelservice';
// import {MatCheckboxModule} from '@angular/material/checkbox'
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
const appRoutes: Routes = [
  {
    path: 'incomecategory',
    loadChildren: './balancesheet/balancesheet.module#BalancesheetModule'
  },
  {
    path: 'expensecategory',
    loadChildren: './balancesheet/balancesheet.module#BalancesheetModule'
  },
  {
    path:'banksettings',
    loadChildren: './balancesheet/balancesheet.module#BalancesheetModule'
  },
  {
    path: 'income',
    loadChildren: './balancesheet/balancesheet.module#BalancesheetModule'
  },
  {
    path: 'expense',
    loadChildren: './balancesheet/balancesheet.module#BalancesheetModule'
  },
  {
    path: 'summary',
    loadChildren: './balancesheet/balancesheet.module#BalancesheetModule'
  },
  {
    path: 'invoices',
    loadChildren: './balancesheet/balancesheet.module#BalancesheetModule'
  },
  {
    path: 'repeatingincome',
    loadChildren: './balancesheet/balancesheet.module#BalancesheetModule'
  },
  {
    path: 'repeatingexpense',
    loadChildren: './balancesheet/balancesheet.module#BalancesheetModule'
  },
  {
    path: 'incomeEdit/:UniqueId',
    loadChildren: './balancesheet/balancesheet.module#BalancesheetModule'
  },
  {
    path: 'verifiedincome',
    loadChildren: './balancesheet/balancesheet.module#BalancesheetModule'
  },
  {
    path: 'verifiedexpense',
    loadChildren: './balancesheet/balancesheet.module#BalancesheetModule'
  },
  {
    path: 'home',
    loadChildren: './balancesheet/balancesheet.module#BalancesheetModule'
  },
  {
    path:'editinvoice/:UniqueId',
    loadChildren: './balancesheet/balancesheet.module#BalancesheetModule'
  },
  {
    path:'editinvoicepayment/:UniqueId',
    loadChildren: './balancesheet/balancesheet.module#BalancesheetModule'
  },
  {
    path:'editincome/:UniqueId',
    loadChildren: './balancesheet/balancesheet.module#BalancesheetModule'
  },
  {
    path:'edit-expense/:UniqueId',
    loadChildren: './balancesheet/balancesheet.module#BalancesheetModule'
  },
  {
    path:'invoicereport',
    loadChildren: './balancesheet/balancesheet.module#BalancesheetModule'
  },
  {
    path:'incomereport',
    loadChildren: './balancesheet/balancesheet.module#BalancesheetModule'
  },
  {
    path:'expensereport',
    loadChildren: './balancesheet/balancesheet.module#BalancesheetModule'
  },
  {
    path: 'add-feature',
    loadChildren: './user/user.module#UserModule'
  },
  {
    path: 'add-privilege',
    loadChildren: './user/user.module#UserModule'
  },
  {
    path: 'add-usertype',
    loadChildren: './user/user.module#UserModule'
  },
  {
    path: 'add-user',
    loadChildren: './user/user.module#UserModule'
  },
  {
    path: '',
    loadChildren: './user/user.module#UserModule'
  },
  {
    path: 'login',
    loadChildren: './user/user.module#UserModule'
  },
  {
    path: 'userlist',
    loadChildren: './user/user.module#UserModule'
  },
  {
    path: 'userdetails',
    loadChildren: './user/user.module#UserModule'
  },
  {
    path: 'userdetails/:userId',
    loadChildren: './user/user.module#UserModule'
  },
  {
    path: 'add-user/:userId',
    loadChildren: './user/user.module#UserModule'
  },
  {
    path: 'error',
    loadChildren: './user/user.module#UserModule'
  },
  {
    path: 'editprofile',
    loadChildren: './user/user.module#UserModule'
  },
  {
    path:'ledger',
    loadChildren: './balancesheet/balancesheet.module#BalancesheetModule'
  },
  {
    path:'companysettings',
    loadChildren: './balancesheet/balancesheet.module#BalancesheetModule'
  },

]

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    // SidebarComponent
  ],
  imports: [
    // MatCheckboxModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule ,
    BrowserModule,
    BalancesheetModule,
    UserModule,
    RouterModule.forRoot(appRoutes),
    BsDatepickerModule.forRoot(),
    AngularMultiSelectModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatRadioModule,

  ],
  providers: [ExcelService,CookieService, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
