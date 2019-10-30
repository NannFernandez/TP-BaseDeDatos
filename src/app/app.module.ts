import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GestionArchivosComponent } from './GestionArchivos/GestionArchivos.component';
import { BotonesSuperioresComponent } from './botonesSuperiores/botonesSuperiores.component';
import { routingComponents } from './app_routing';

@NgModule({
   declarations: [
      AppComponent,
      GestionArchivosComponent,
      BotonesSuperioresComponent,
      routingComponents
   ],
   imports: [
      BrowserModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
