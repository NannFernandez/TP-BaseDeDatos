import { Component, OnInit } from '@angular/core';
import { DatosDescarga } from '../domain/datosDescarga';

@Component({
  selector: 'app-datos-descarga',
  templateUrl: './datos-descarga.component.html',
  styleUrls: ['./datos-descarga.component.css']
})
export class DatosDescargaComponent implements OnInit {

  lista: DatosDescarga[]=[new DatosDescarga,new DatosDescarga,new DatosDescarga,new DatosDescarga]

  constructor() { }

  ngOnInit() {
  }

}
