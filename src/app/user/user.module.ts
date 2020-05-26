import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UserRoutingModule } from './user-routing.module';
import { UserLoginComponent } from './user-login/user-login.component';
import { UsersListComponent } from './users-list/users-list.component';
import { ErrorComponent } from './error/error.component';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule, ReactiveFormsModule,
    AngularMultiSelectModule,
    MatSelectModule
  ],
  declarations: [ErrorComponent, UsersListComponent, UserLoginComponent]
})
export class UserModule { }
