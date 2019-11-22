import { Component, OnInit } from '@angular/core';
import { Archivo } from '../domain/archivo';
import { ArchivosService } from '../services/archivos.service';
import { Router } from '@angular/router';
import { extensiones } from '../services/extensiones.service';

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

  archivos: Archivo[] = []
  archivoSeleccionado: Archivo = null
  modalToggle: boolean = false

  constructor(
    private archivosService: ArchivosService,
    private router: Router,
  ) { }

  async ngOnInit() {
    try {
      this.router.routeReuseStrategy.shouldReuseRoute = () => false
      this.archivos = await this.archivosService.todosLosArchivos()
    } catch (error) {
      mostrarError(this, error)
    }
  }

  async seleccionarArchivo(id: number) {
    if (!id) {
      this.archivoSeleccionado = null
    } else {
      this.archivoSeleccionado = await this.archivosService.getArchivo(id)
    }
  }

  getExtension(id: number) {
    const formato = extensiones.find((ext) => { return ext.id == id })
    return formato.extension
  }

}
