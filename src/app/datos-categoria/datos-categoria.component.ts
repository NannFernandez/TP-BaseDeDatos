import { Component, OnInit } from '@angular/core';
import { DatosCategoria } from '../domain/datosCategoria';

@Component({
  selector: 'app-datos-categoria',
  templateUrl: './datos-categoria.component.html',
  styleUrls: ['./datos-categoria.component.css']
})
export class DatosCategoriaComponent implements OnInit {
  lista: DatosCategoria[]=[new DatosCategoria,new DatosCategoria,new DatosCategoria,new DatosCategoria,new DatosCategoria]

  constructor() { }

  ngOnInit() {
  }

}
