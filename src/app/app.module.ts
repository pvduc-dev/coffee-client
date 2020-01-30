import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { registerLocaleData } from '@angular/common';
import { NZ_I18N, NzLayoutModule, vi_VN } from 'ng-zorro-antd';
import vi from '@angular/common/locales/vi';
import { AuthModule } from './auth/auth.module';
import {UsersModule} from './users/users.module';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {AuthInterceptor} from './core/auth.interceptor';

registerLocaleData(vi);

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    UsersModule,
    NzLayoutModule,
  ],
  providers: [
    {
      provide: NZ_I18N,
      useValue: vi_VN
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
