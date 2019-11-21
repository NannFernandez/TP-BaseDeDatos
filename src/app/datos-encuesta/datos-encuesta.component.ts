import { Component, OnInit } from '@angular/core';
import { DatosEncuesta } from '../domain/datosEncuesta';
import { Categoria } from '../domain/categoria';

@Component({
  selector: 'app-datos-encuesta',
  templateUrl: './datos-encuesta.component.html',
  styleUrls: ['./datos-encuesta.component.css']
})
export class DatosEncuestaComponent implements OnInit {
  lista: DatosEncuesta[]=[new DatosEncuesta, new DatosEncuesta,new DatosEncuesta,new DatosEncuesta ]
  desde: any
  hasta: any
  categorias: Categoria[]=[new Categoria(1,'Musica Clasica'),new Categoria(2,'Jazz')]
 
  constructor() { }

 

  get minimo(){ 
    var hoy = new Date().toISOString().slice(0,10);
    return hoy
 }

 get maximo(){ 
  var hoy = new Date('2020-12-31').toISOString().slice(0,10);
  return hoy
}

  ngOnInit() {
  }

}
