import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { BotonesSuperioresComponent } from './botones-superiores/botones-superiores.component';
import { AppComponent } from './app.component';
import { BotoneraComponent } from './botonera/botonera.component';
import { AbmComponent } from './abm/abm.component';
import { AgregarModificarComponent } from './agregar-modificar/agregar-modificar.component';
import { DatosDescargaComponent } from './datos-descarga/datos-descarga.component';
import { DatosCategoriaComponent } from './datos-categoria/datos-categoria.component';
import { DatosEncuestaComponent } from './datos-encuesta/datos-encuesta.component';
import { GestionArchivosComponent } from './gestion-archivos/gestion-archivos.component';

const routes: Routes = [
  { path: '', redirectTo: '/botonera', pathMatch: 'full' },
  { path: 'botonera', component: BotoneraComponent },
  { path: 'abm', component: AbmComponent },
  { path: 'agregar', component: AgregarModificarComponent },
  { path: 'descarga', component: DatosDescargaComponent },
  { path: 'categoria', component: DatosCategoriaComponent },
  { path: 'encuesta', component: DatosEncuestaComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
  BotonesSuperioresComponent,
  GestionArchivosComponent,
  BotoneraComponent,
  AbmComponent,
  AgregarModificarComponent,
  DatosDescargaComponent,
  DatosCategoriaComponent,
  DatosEncuestaComponent,
  AppComponent,
]