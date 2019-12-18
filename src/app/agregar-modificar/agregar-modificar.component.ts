import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Archivo } from '../domain/archivo';
import { ArchivosService } from '../services/archivos.service';
import { Router } from '@angular/router';
import { extensiones } from '../services/extensiones.service';
//import { categorias } from '../services/categorias.service';
import { Categoria } from '../domain/categoria';
import { Contenido } from '../domain/contenido';
import { AbmService } from '../services/abm.service';

function mostrarError(component, error) {
  console.log('error', error)
  component.errors.push(error.error)
}

@Component({
  selector: 'app-agregar-modificar',
  templateUrl: './agregar-modificar.component.html',
  styleUrls: ['./agregar-modificar.component.css']
})
export class AgregarModificarComponent implements OnInit {

  @Input() contenido: Contenido

  async ngOnInit() {

    
    try {
      if (this.contenido===null){
        this.contenido = new Contenido
        
        
      }
      this.router.routeReuseStrategy.shouldReuseRoute = () => false
      if (this.contenido.idContenido === null){
        this.contenido.fechaPublicacion = '2'
      }
    } catch (error) {
      mostrarError(this, error)
    }
  }

  /*ngOnChanges() {
    if (this.archivo) {
      this.extensionSeleccionada = this.archivo.extension
      this.categoriasSeleccionadas = this.archivo.categoria
    }
  }*/

  get minimo(){ 
    var hoy = new Date().toISOString().slice(0,10);
    return hoy
 }

 get maximo(){ 
  var hoy = new Date('2020-12-31').toISOString().slice(0,10);
  return hoy
}


  extensiones: any = extensiones
  categorias: Categoria[]=[new Categoria('201','Deportes'),new Categoria('202','Economia'),new Categoria('203','Crimen')
  ,new Categoria('204','Politica'),new Categoria('205','Ciencia'),new Categoria('207','Filosofia')
  ,new Categoria('208','Musica'),new Categoria('209','Entretenimiento'),new Categoria('210','Otros')]
  
  extensionSeleccionada: number = 0
  categoriasSeleccionadas: number[] = []
  inputArchivo: any = null

  fileData: File = null;
  previewUrl: any = null;
  fileUploadProgress: string = null;
  uploadedFilePath: string = null;

  constructor(
    private http: HttpClient, private abmService: AbmService,private router: Router)
   { }

  categoriaChecked(id: number) {
    console.log(id)
    this.categoriasSeleccionadas.includes(id)
  }

  fileProgress() {
    console.log(this.inputArchivo)
    this.fileData = <File>this.inputArchivo.target.files[0];
    this.preview();
  }

  preview() {
    // Show preview
    var mimeType = this.fileData.type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }

    var reader = new FileReader();
    reader.readAsDataURL(this.fileData);
    reader.onload = (_event) => {
      this.previewUrl = reader.result;
    }
  }

  async onSubmit() {
    /*const formData = new FormData();
    formData.append('file', this.fileData);
    this.http.post('https://transfer.sh/', formData)
      .subscribe((res: any) => {
        console.log(res);
        this.uploadedFilePath = res.data.filePath;
        alert('SUCCESS !!');
      })*/

      if (this.contenido.idContenido != null){
        await this.abmService.modificarArchivo(this.contenido)   
        this.router.routeReuseStrategy.shouldReuseRoute = () => false 

      }else{
    
        
        await this.abmService.agregarArchivo(this.contenido)   
        this.router.routeReuseStrategy.shouldReuseRoute = () => false }
       

  
      
  }
  
 


}
