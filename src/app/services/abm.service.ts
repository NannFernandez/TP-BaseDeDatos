import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contenido } from '../domain/contenido';
import { REST_SERVER_URL } from './config.service';
import { Categoria } from '../domain/categoria';

@Injectable({
  providedIn: 'root'
})
export class AbmService {

constructor(private http: HttpClient) { }

async contenidos() {
  const contenidos = await this.http.get<Contenido[]>(REST_SERVER_URL + '/contenidos').toPromise()
  return contenidos.map((datos) => Contenido.fromJson(datos))
}

async categorias() {
  const categorias = await this.http.get<Categoria[]>(REST_SERVER_URL + '/categoria').toPromise()
  return categorias.map((datos) => Contenido.fromJson(datos))
}

 async getArchivo(id: number) {
     const archivo = await this.http.get<Contenido>(REST_SERVER_URL + '/contenidos/' + id).toPromise()
   
    return Contenido.fromJson(archivo)
  }

  async modificarArchivo(contenido: Contenido) {
     return this.http.put(REST_SERVER_URL + '/contenidos' +'/modificar', contenido.toJSON()).toPromise()
    }

    async agregarArchivo(contenido: Contenido) {
      return this.http.put(REST_SERVER_URL + '/contenidos' +'/agregar', contenido.toJSON()).toPromise()
     }

  async borrarArchivo(contenido: Contenido) {
    return this.http.put(REST_SERVER_URL + '/contenidos' +'/borrar/' + contenido.idContenido, contenido.toJSON()).toPromise()
   
 }

}
