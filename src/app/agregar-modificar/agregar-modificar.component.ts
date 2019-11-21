import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Archivo } from '../domain/archivo';
import { ArchivosService } from '../services/archivos.service';
import { Router } from '@angular/router';
import { extensiones } from '../services/extensiones.service';
import { categorias } from '../services/categorias.service';
import { Categoria } from '../domain/categoria';

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

  @Input() archivo: Archivo;
  categoriasUpdate:Categoria[] = [new Categoria(4,'Rock'),new Categoria(5,'Rap'),new Categoria(6,'Cumbia')]

  agregarElemento (categoria: any){
    this.categoriasUpdate.push(categoria)
 }

 eliminarElemento (categoria: any){
  for (var _i = 0; _i < this.categoriasUpdate.length; _i++) {
    if (this.categoriasUpdate[_i].id===categoria.id){
      this.categoriasUpdate.splice(_i,1)

    }
}
}

  async ngOnInit() {
    try {
      this.router.routeReuseStrategy.shouldReuseRoute = () => false
    } catch (error) {
      mostrarError(this, error)
    }
  }

  ngOnChanges() {
    if (this.archivo) {
      console.log(this.archivo)
      this.extensionSeleccionada = this.archivo.extension
      this.categoriaSeleccionada = this.archivo.categoria
    }
  }

  extensiones: any = extensiones
  categorias: any = categorias
  extensionSeleccionada: number = 0
  categoriaSeleccionada: number = 0
  inputArchivo: any = null

  fileData: File = null;
  previewUrl: any = null;
  fileUploadProgress: string = null;
  uploadedFilePath: string = null;

  constructor(private http: HttpClient, private archivosService: ArchivosService, private router: Router) { }

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

  onSubmit() {
    const formData = new FormData();
    formData.append('file', this.fileData);
    this.http.post('https://transfer.sh/', formData)
      .subscribe((res: any) => {
        console.log(res);
        this.uploadedFilePath = res.data.filePath;
        alert('SUCCESS !!');
      })
  }

}
