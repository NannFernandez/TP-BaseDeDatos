
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
      MDBBootstrapModule.forRoot()
   ],
   schemas:[NO_ERRORS_SCHEMA],
   providers: [DescargaServiceService],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
