import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserTableComponent} from './user-table/user-table.component';
import {AuthGuard} from '../shared/auth.guard';


const routes: Routes = [
  {
    path: 'users',
    component: UserTableComponent,
    canActivate: [AuthGuard],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
