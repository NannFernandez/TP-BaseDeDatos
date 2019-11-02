
import { AppRoutingModule,routingComponents } from './app_routing.module';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { GestionArchivosComponent } from './GestionArchivos/GestionArchivos.component';
import { BotonesSuperioresComponent } from './botonesSuperiores/botonesSuperiores.component';
import { BrowserModule } from '@angular/platform-browser';
import { BotoneraComponent } from './botonera/botonera.component';

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { AbmComponent } from './abm/abm.component';
import { AgregarModificarComponent } from './agregar-modificar/agregar-modificar.component';
import { ModalConfirmacionComponent } from './modal-confirmacion/modal-confirmacion.component';



@NgModule({
   declarations: [
      AppComponent,
      GestionArchivosComponent,
      BotonesSuperioresComponent,
      routingComponents,
      BotoneraComponent,
      AbmComponent,
      AgregarModificarComponent,
      ModalConfirmacionComponent
   ],
   imports: [
      BrowserModule,
      CommonModule,
      FormsModule,
      //permitebindingbidireccional\\\\nMDBBootstrapModule.forRoot(),
      AppRoutingModule,
      HttpClientModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
