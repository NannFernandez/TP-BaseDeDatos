import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Archivo } from '../domain/archivo';
import { REST_SERVER_URL } from './config.service';
import { MockRestService } from './mock-rest.service';

@Injectable({
  providedIn: 'root'
})
export class ArchivosService {

  constructor(private http: HttpClient, private mock: MockRestService) { }

  async todosLosArchivos() {
    // const archivos = await this.http.get<Archivo[]>(REST_SERVER_URL + '/archivos').toPromise()
    const archivos = this.mock.getArchivos()
    return archivos.map((archivo) => Archivo.fromJson(archivo))
  }

  async getArchivo(id: number) {
    // const archivo = await this.http.get<Archivo>(REST_SERVER_URL + '/archivos/' + id).toPromise()
    const archivo = this.mock.getArchivo(id)
    return Archivo.fromJson(archivo)
  }

  async modificarArchivo(archivo: Archivo) {
    // return this.http.put(REST_SERVER_URL + '/archivos/' + archivo.id, archivo.toJSON()).toPromise()
    return archivo
  }

}
