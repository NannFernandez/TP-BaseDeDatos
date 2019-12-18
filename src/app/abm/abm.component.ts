import { Component, OnInit } from '@angular/core';
import { Archivo } from '../domain/archivo';
import { ArchivosService } from '../services/archivos.service';
import { Router } from '@angular/router';
import { extensiones } from '../services/extensiones.service';
import { Contenido } from '../domain/contenido';
import { Categoria } from '../domain/categoria';
import { HttpClient } from '@angular/common/http';
import { AbmService } from '../services/abm.service';

function mostrarError(component, error) {
  console.log('error', error)
  component.errors.push(error.error)
}

@Component({
  selector: 'app-abm',
  templateUrl: './abm.component.html',
  styleUrls: ['./abm.component.css']
})
export class AbmComponent implements OnInit {

  archivos: any[] = []
  archivoSeleccionado: Contenido = null
  modalToggle: boolean = false
  contenidos: Contenido[]=[]
  categorias: Categoria[]=[]
  idBorrar: Contenido;

  constructor(private http: HttpClient, private abmService: AbmService,private router: Router) { }

  async ngOnInit() {
    try {
      this.router.routeReuseStrategy.shouldReuseRoute = () => false
      this.contenidos = await this.abmService.contenidos()
    } catch (error) {
      mostrarError(this, error)
    }
  }

  async seleccionarArchivo(contenido: Contenido) {
      if (contenido === null) {
      this.archivoSeleccionado = new Contenido
    } else {
      var copy = Object.assign(new Contenido,contenido);
      this.archivoSeleccionado = copy
      

    }
  }

  getExtension(id: number) {
    const formato = extensiones.find((ext) => { return ext.id == id })
    return formato.extension
  }
 async borrar (contenido: Contenido){
  
    await this.abmService.borrarArchivo(contenido)   
    this.router.navigate(['abm'])
    this.router.routeReuseStrategy.shouldReuseRoute = () => false
    // no actualiza la vista
   }

}
