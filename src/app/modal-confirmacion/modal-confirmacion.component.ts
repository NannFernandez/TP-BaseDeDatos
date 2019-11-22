import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AbmService } from '../services/abm.service';
import { Router } from '@angular/router';
import { Contenido } from '../domain/contenido';

@Component({
  selector: 'app-modal-confirmacion',
  templateUrl: './modal-confirmacion.component.html',
  styleUrls: ['./modal-confirmacion.component.css']
})
export class ModalConfirmacionComponent implements OnInit {

   @Input() contenido: Contenido

  constructor(private http: HttpClient, private abmService: AbmService,private router: Router) { }

  ngOnInit() {
  }

 async borrar (){
  
  await this.abmService.borrarArchivo(this.contenido)
  this.router.navigate(['abm'])

 }

}
