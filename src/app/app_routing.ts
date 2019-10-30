import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { BotonesSuperioresComponent } from './botonesSuperiores/botonesSuperiores.component';
import { GestionArchivosComponent } from './GestionArchivos/GestionArchivos.component';
import { AppComponent } from './app.component';


export const routes: Routes = [
  { path: '', redirectTo:'', pathMatch:'full' },
  { path: 'GestionDeArchivo', component: GestionArchivosComponent},
  { path: '**', redirectTo: '/listaTareas', pathMatch: 'full' },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  BotonesSuperioresComponent,
  GestionArchivosComponent,
  AppComponent 

]