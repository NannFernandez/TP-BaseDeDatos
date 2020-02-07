
import { AppRoutingModule,routingComponents } from './app_routing.module';
import { NgModule,NO_ERRORS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MDBBootstrapModule, ModalModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { ModalConfirmacionComponent } from './modal-confirmacion/modal-confirmacion.component';
import { DescargaServiceService } from './services/descargaService.service';


import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from '../environments/environment';

import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
   declarations: [
      routingComponents,
      ModalConfirmacionComponent,
      AppComponent
     
      
   ],
   imports: [
      BrowserModule,
      CommonModule,
      FormsModule,
      ModalModule,
      AppRoutingModule,
      HttpClientModule,
      MDBBootstrapModule.forRoot(),
      AngularFireModule.initializeApp(environment.firebase),
      AngularFireStorageModule,
      ReactiveFormsModule
   ],
   schemas:[NO_ERRORS_SCHEMA],
   providers: [DescargaServiceService],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
