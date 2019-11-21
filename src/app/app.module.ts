
import { AppRoutingModule,routingComponents } from './app_routing.module';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { ModalConfirmacionComponent } from './modal-confirmacion/modal-confirmacion.component';

@NgModule({
   declarations: [
      routingComponents,
      ModalConfirmacionComponent,
   ],
   imports: [
      BrowserModule,
      CommonModule,
      FormsModule,
      //permitebindingbidireccional\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nMDBBootstrapModule.forRoot(),
      AppRoutingModule,
      HttpClientModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
