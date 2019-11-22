import { Injectable } from '@angular/core';
import { Archivo } from '../domain/archivo';

@Injectable({
  providedIn: 'root'
})
export class MockRestService {

  constructor() { }

  getArchivo(id: number): Archivo {
    return this.getArchivos().find((archivo) => { return archivo.id == id })
  }

  getArchivos(): any[] {
    return [
      {
        'id': 1,
        'titulo': 'asdasdas',
        'fecha': '2020-12-20',
        'categoria': [3, 1],
        'extension': 4,
      },
      {
        'id': 2,
        'titulo': 'fsdfsdf',
        'fecha': '2019-11-20',
        'categoria': [2, 4, 3],
        'extension': 3,
      },
      {
        'id': 3,
        'titulo': 'yrtyrty',
        'fecha': '2020-08-12',
        'categoria': [3, 5],
        'extension': 1,
      },
      {
        'id': 4,
        'titulo': 'ashalksxxx',
        'fecha': '2018-03-20',
        'categoria': [1, 2, 3],
        'extension': 5,
      },
      {
        'id': 5,
        'titulo': 'cjkvlx',
        'fecha': '2009-07-10',
        'categoria': [4, 5],
        'extension': 2,
      },
    ]
  }

}
