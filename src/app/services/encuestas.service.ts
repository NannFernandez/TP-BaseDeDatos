import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DatosEncuesta } from '../domain/datosEncuesta';
import { REST_SERVER_URL } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class EncuestasService {

constructor(private http: HttpClient) { }

async mediaPuntajeAsc(registros: number, desde: any,hasta: any) {
  const encuestas = await this.http.get<DatosEncuesta[]>(REST_SERVER_URL + '/mediaPuntajeAsc/' + registros + '/'+ desde +'/'+ hasta).toPromise()
  console.log(REST_SERVER_URL + '/mediaPuntajeAsc/' + registros + '/'+ desde +'/'+ hasta)
  return encuestas.map((datos) => DatosEncuesta.fromJson(datos))
}
async mediaPuntajeDesc(registros: number, desde: any,hasta: any) {
  const encuestas = await this.http.get<DatosEncuesta[]>(REST_SERVER_URL + '/mediaPuntajeDesc/' + registros+ '/'+ desde +'/'+ hasta).toPromise()

  return encuestas.map((datos) => DatosEncuesta.fromJson(datos))
}
async mediaEncuestaDesc(registros: number, desde: any,hasta: any) {
  const encuestas = await this.http.get<DatosEncuesta[]>(REST_SERVER_URL + '/mediaEncuestaDesc/' + registros+ '/'+ desde +'/'+ hasta).toPromise()

  return encuestas.map((datos) => DatosEncuesta.fromJson(datos))
}
async mediaEncuestaAsc(registros: number, desde: any,hasta: any) {
  const encuestas = await this.http.get<DatosEncuesta[]>(REST_SERVER_URL + '/mediaEncuestaAsc/' + registros+ '/'+ desde +'/'+ hasta).toPromise()

  return encuestas.map((datos) => DatosEncuesta.fromJson(datos))
}

}
