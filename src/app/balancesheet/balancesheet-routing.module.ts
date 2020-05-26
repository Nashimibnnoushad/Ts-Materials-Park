import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TsuserComponent } from './tsuser/tsuser.component';
import { TsledgerComponent } from './tsledger/tsledger.component';
import { TsadditemComponent } from './tsadditem/tsadditem.component';
import { DailysaleComponent } from './dailysale/dailysale.component';
import { TsvehicleComponent } from './tsvehicle/tsvehicle.component';
import { TsexpenseComponent } from './tsexpense/tsexpense.component';
import { TsaddexpenseComponent } from './tsaddexpense/tsaddexpense.component';
import { TsexpenceledgerComponent } from './tsexpenceledger/tsexpenceledger.component';
import { TspurchaseComponent } from './tspurchase/tspurchase.component';
import { TsdailysalerepportComponent } from './tsdailysalerepport/tsdailysalerepport.component';
import { TsmonthlysalesrepportComponent } from './tsmonthlysalesrepport/tsmonthlysalesrepport.component';
import { TsyearlysalesrepportComponent } from './tsyearlysalesrepport/tsyearlysalesrepport.component';
import { TsledgerlistComponent } from './tsledgerlist/tsledgerlist.component';
import { TsledgeramountComponent } from './tsledgeramount/tsledgeramount.component';
import { TsexpenceledgerlistComponent } from './tsexpenceledgerlist/tsexpenceledgerlist.component';
import { TsbackupComponent } from './tsbackup/tsbackup.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path:'tsuser',
    component:TsuserComponent
  },
  {
    path:'tsledger',
    component:TsledgerComponent
  },
  {
    path:'tsitem',
    component:TsadditemComponent
  },
  {
    path:'dailysale',
    component:DailysaleComponent
  },
  {
    path:'tsvehicle',
    component:TsvehicleComponent
  },
  {
    path:'tsexpense',
    component:TsexpenseComponent
  },
  {
    path:'tsaddexpense',
    component:TsaddexpenseComponent
  },
  {
    path:'tsaddexpenseledger',
    component:TsexpenceledgerComponent
  },
  {
    path:'tspurchase',
    component:TspurchaseComponent
  },  
  {
    path:'tsdailysalesrepport',
    component:TsdailysalerepportComponent
  },
  {
    path:'tsmonthlysalesrepport',
    component:TsmonthlysalesrepportComponent
  },
  {
    path:'tsyearlysalesrepport',
    component:TsyearlysalesrepportComponent
  },
  {
    path:'tsledgerlist',
    component:TsledgerlistComponent
  },
  {
    path:'tsledgeramount',
    component:TsledgeramountComponent
  },
  {
    path:'tsexpenseledgerlist',
    component:TsexpenceledgerlistComponent
  },
  {
    path:'tsbackup',
    component:TsbackupComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BalancesheetRoutingModule { }
