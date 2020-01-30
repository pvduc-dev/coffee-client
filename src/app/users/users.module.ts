import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UserTableComponent } from './user-table/user-table.component';
import { UserService } from './shared/user.service';
import {NzTableModule} from 'ng-zorro-antd';


@NgModule({
  declarations: [UserTableComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    NzTableModule
  ],
  providers: [
    UserService,
  ]
})
export class UsersModule { }
