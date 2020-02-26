import { Component, OnInit } from '@angular/core';
import { DatosDescarga } from '../domain/datosDescarga';
import { HttpClient } from '@angular/common/http';
import { DescargaServiceService } from '../services/descargaService.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-datos-descarga',
  templateUrl: './datos-descarga.component.html',
  styleUrls: ['./datos-descarga.component.css']
})
export class DatosDescargaComponent implements OnInit {

  lista: Array<DatosDescarga> = []
  errors = []
  registros: number 
  tipoQuery: any
  constructor(private http: HttpClient, private descargaService: DescargaServiceService,private router: Router) {}

  async ngOnInit() {}
  
  async descargas(){
    this.router.routeReuseStrategy.shouldReuseRoute = () => false
    if (this.tipoQuery === 'ASC'){
    this.lista = await this.descargaService.velTransfAsc(this.registros)}
    if (this.tipoQuery === 'DESC'){
      this.lista = await this.descargaService.velTransfDesc(this.registros)}
   }

   poderBuscar(){
    console.log(this.tipoQuery)
     if ((this.tipoQuery === 'ASC' || this.tipoQuery === 'DESC') && this.registros>0){
       return true
     }else {
       return false
     }
   }


}
