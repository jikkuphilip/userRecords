import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { DatePipe } from '@angular/common'

import { AppComponent } from './app.component';
import { UserlistComponent } from './userlist/userlist.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { DatepickerModule, BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
    UserlistComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(),
    ToastrModule.forRoot(),
    HttpClientModule
    
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
