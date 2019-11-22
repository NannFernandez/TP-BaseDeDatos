import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { REST_SERVER_URL } from './config.service';
import { DatosDescarga } from '../domain/datosDescarga';

@Injectable({
  providedIn: 'root'
})
export class DescargaServiceService {

  //velTransfAsc(): Promise<DatosDescarga[]>

constructor(private http: HttpClient) { }

async velTransfAsc(registros: number) {
  const descargas = await this.http.get<DatosDescarga[]>(REST_SERVER_URL + '/velTransfAsc/' + registros).toPromise()
  console.log(descargas)
  return descargas.map((datos) => DatosDescarga.fromJson(datos))
 
}

async velTransfDesc(registros: number) {
  const descargas = await this.http.get<DatosDescarga[]>(REST_SERVER_URL + '/velTransfDesc/' + registros).toPromise()
  console.log(descargas)
  return descargas.map((datos) => DatosDescarga.fromJson(datos))
 
}


}
