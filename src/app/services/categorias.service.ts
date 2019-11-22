import { Injectable } from '@angular/core';
import { DatosCategoria } from '../domain/datosCategoria';
import { REST_SERVER_URL } from './config.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

constructor(private http: HttpClient) { }

async velTransfMediaAsc(registros: number) {
  const descargas = await this.http.get<DatosCategoria[]>(REST_SERVER_URL + '/velTransfMediaAsc/' + registros).toPromise()
  console.log(descargas)
  return descargas.map((datos) => DatosCategoria.fromJson(datos))
}
async velTransfMediaDesc(registros: number) {
  const descargas = await this.http.get<DatosCategoria[]>(REST_SERVER_URL + '/velTransfMediaDesc/' + registros).toPromise()
  console.log(descargas)
  return descargas.map((datos) => DatosCategoria.fromJson(datos))
}
async velEdadMediaAsc(registros: number) {
  const descargas = await this.http.get<DatosCategoria[]>(REST_SERVER_URL + '/velEdadMediaAsc/' + registros).toPromise()
  console.log(descargas)
  return descargas.map((datos) => DatosCategoria.fromJson(datos))
}
async velEdadMediaDesc(registros: number) {
  const descargas = await this.http.get<DatosCategoria[]>(REST_SERVER_URL + '/velEdadMediaDesc/' + registros).toPromise()
  console.log(descargas)
  return descargas.map((datos) => DatosCategoria.fromJson(datos))
}

}
