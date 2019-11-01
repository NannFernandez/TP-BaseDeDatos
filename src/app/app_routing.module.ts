import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { BotonesSuperioresComponent } from './botonesSuperiores/botonesSuperiores.component';
import { GestionArchivosComponent } from './GestionArchivos/GestionArchivos.component';
import { AppComponent } from './app.component';
import { BotoneraComponent } from './botonera/botonera.component';
import { AbmComponent } from './abm/abm.component';
import { AgregarModificarComponent } from './agregar-modificar/agregar-modificar.component';


export const routes: Routes = [

    { path: 'botonera', component: BotoneraComponent},
    { path: 'abm', component: AbmComponent},
    { path: 'agregar', component: AgregarModificarComponent},
    { path: '**', redirectTo: '/botonera', pathMatch: 'full' }
                                               
  
 
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
  AppComponent 

]