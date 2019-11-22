import { Component, OnInit } from '@angular/core';
import { DatosCategoria } from '../domain/datosCategoria';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CategoriasService } from '../services/categorias.service';

@Component({
  selector: 'app-datos-categoria',
  templateUrl: './datos-categoria.component.html',
  styleUrls: ['./datos-categoria.component.css']
})
export class DatosCategoriaComponent implements OnInit {
  lista: DatosCategoria[]
  registros: number
  tipoQuery: any


  constructor(private http: HttpClient, private categoriasService: CategoriasService, private router: Router) { }

  async ngOnInit() {
  }

  async categorias() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false

    if (this.tipoQuery === 'TRANSF_ASC') {
      this.lista = await this.categoriasService.velTransfMediaAsc(this.registros)
    }
    if (this.tipoQuery === 'TRANSF_DESC') {
      this.lista = await this.categoriasService.velTransfMediaDesc(this.registros)
    }
    if (this.tipoQuery === 'EDAD_ASC') {
      this.lista = await this.categoriasService.velEdadMediaAsc(this.registros)
    }
    if (this.tipoQuery === 'EDAD_DESC') {
      this.lista = await this.categoriasService.velEdadMediaDesc(this.registros)
    }
  }
}


