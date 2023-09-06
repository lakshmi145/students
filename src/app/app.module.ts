import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BindinggComponent } from './bindingg/bindingg.component';
import { AgePipe } from './pipes/age.pipe';
import { UsersService } from './services/users.service';
import { HttpClientModule } from '@angular/common/http';
import { Routes } from '@angular/router';



@NgModule({
  declarations: [
    AppComponent,
    BindinggComponent,
    AgePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule 
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
