import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { AppRoutingModule } from './app-routing.module';
import { UsersService } from './shared/services/users.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './shared/services/auth.service';
import { SystemModule } from './system/system.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AuthModule,
    AppRoutingModule,
    SystemModule,
    BrowserAnimationsModule
  ],
  providers: [
    UsersService, 
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
