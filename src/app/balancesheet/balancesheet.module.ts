import { NgModule } from '@angular/core';
import { CommonModule, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { BalancesheetRoutingModule } from './balancesheet-routing.module';
import { HomeComponent } from './home/home.component';
import { TsuserComponent } from './tsuser/tsuser.component';
import { TsledgerComponent } from './tsledger/tsledger.component';
import { TsadditemComponent } from './tsadditem/tsadditem.component';
import { DailysaleComponent } from './dailysale/dailysale.component';
import {MatRadioModule} from '@angular/material/radio';
import { TsvehicleComponent } from './tsvehicle/tsvehicle.component';
import { TsexpenseComponent } from './tsexpense/tsexpense.component';
import { TsaddexpenseComponent } from './tsaddexpense/tsaddexpense.component';
import { TsexpenceledgerComponent } from './tsexpenceledger/tsexpenceledger.component';
import { TspurchaseComponent } from './tspurchase/tspurchase.component';
import { TsdailysalerepportComponent } from './tsdailysalerepport/tsdailysalerepport.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { TsmonthlysalesrepportComponent } from './tsmonthlysalesrepport/tsmonthlysalesrepport.component';
import { TsyearlysalesrepportComponent } from './tsyearlysalesrepport/tsyearlysalesrepport.component';
import { TsledgerlistComponent } from './tsledgerlist/tsledgerlist.component';
import { TsledgeramountComponent } from './tsledgeramount/tsledgeramount.component';
import { TsexpenceledgerlistComponent } from './tsexpenceledgerlist/tsexpenceledgerlist.component';
import { TsbackupComponent } from './tsbackup/tsbackup.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatDatepickerModule,
    ReactiveFormsModule ,
    BalancesheetRoutingModule,
    BsDatepickerModule.forRoot(),
    MatRadioModule
  ],
  providers:[MatNativeDateModule],
  
  declarations: [HomeComponent,TsuserComponent, TsledgerComponent, TsadditemComponent, DailysaleComponent, TsvehicleComponent, TsexpenseComponent, TsaddexpenseComponent, TsexpenceledgerComponent, TspurchaseComponent, TsdailysalerepportComponent, TsmonthlysalesrepportComponent, TsyearlysalesrepportComponent, TsledgerlistComponent, TsledgeramountComponent, TsexpenceledgerlistComponent, TsbackupComponent,  ]
})
export class BalancesheetModule { }
