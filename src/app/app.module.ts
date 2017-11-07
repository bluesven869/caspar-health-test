import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Http } from '@angular/http';


import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ApiService } from './services/api.service';
import { TreeTableModule } from "ng-treetable";

import { AppComponent } from './app.component';

import { AppHeaderComponent } from './components/header/app-header.component';

import { FacilitiesComponent } from './components/facilities/facilities.component';
import { HomeComponent } from './components/home/home.component';
import { PatientsComponent } from './components/patients/patients.component';
import { TherapistsComponent } from './components/therapists/therapists.component';

import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    HomeComponent,
    FacilitiesComponent,
    PatientsComponent,
    TherapistsComponent
  ],
  imports: [
    BrowserModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    routing,
    TreeTableModule,    
  ],
  providers: [ApiService, Http],
  bootstrap: [AppComponent]
})
export class AppModule { }
