import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NzButtonModule, NzCardModule, NzFormModule, NzGridModule, NzInputModule} from 'ng-zorro-antd';
import {ReactiveFormsModule} from '@angular/forms';
import {AuthRoutingModule} from './auth-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import {AuthService} from './shared/auth.service';



@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        NzFormModule,
        NzInputModule,
        NzButtonModule,
        ReactiveFormsModule,
        NzCardModule,
        AuthRoutingModule,
        NzGridModule
    ],
  declarations: [
    LoginComponent,
  ],
  providers: [AuthService]
})
export class AuthModule { }
