import { Component, OnInit } from '@angular/core';
import { DatosEncuesta } from '../domain/datosEncuesta';
import { Categoria } from '../domain/categoria';
import { EncuestasService } from '../services/encuestas.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-datos-encuesta',
  templateUrl: './datos-encuesta.component.html',
  styleUrls: ['./datos-encuesta.component.css']
})
export class DatosEncuestaComponent implements OnInit {
  
  lista: DatosEncuesta[]
  desde: any
  hasta: any
  tipoQuery: any
  registros: number
 
  constructor(private http: HttpClient, private encuestasService: EncuestasService, private router: Router) { }
  ngOnInit() { }
 async encuestas(){ 
   this.router.routeReuseStrategy.shouldReuseRoute = () => false

  if (this.tipoQuery === 'PTJ_ASC') {
    this.lista = await this.encuestasService.mediaPuntajeAsc(this.registros,this.parsear(this.desde),this.parsear(this.hasta))
  }
  if (this.tipoQuery === 'PTJ_DESC') {
    this.lista = await this.encuestasService.mediaPuntajeDesc(this.registros,this.parsear(this.desde),this.parsear(this.hasta))
  }
  if (this.tipoQuery === 'ENC_DESC') {
    this.lista = await this.encuestasService.mediaEncuestaDesc(this.registros,this.parsear(this.desde),this.parsear(this.hasta))
  }
  if (this.tipoQuery === 'ENC_ASC') {
    this.lista = await this.encuestasService.mediaEncuestaAsc(this.registros,this.parsear(this.desde),this.parsear(this.hasta))
  }
}

  get minimo(){ 
    var hoy = new Date().toISOString().slice(0,10);
    return hoy
 }

 get maximo(){ 
  var hoy = new Date('2020-12-31').toISOString().slice(0,10);
  return hoy
}

 parsear (fecha){
   console.log(fecha.substring(0,4) + fecha.substring(5,7) + fecha.substring(8,10))
   
  
  return fecha.substring(0,4) + fecha.substring(5,7) + fecha.substring(8,10)
 }

 

}
