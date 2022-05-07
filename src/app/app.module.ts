import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { TemplateComponent } from './template/template.component';
import { TripComponent } from './trip/trip.component';
import { ComplaintComponent } from './complaint/complaint.component';
import { TripListComponent } from './trip-list/trip-list.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    TripComponent,
    ComplaintComponent,
    TripListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
