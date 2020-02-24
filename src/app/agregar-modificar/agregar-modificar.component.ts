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
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireStorageModule, AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import { pipe } from 'rxjs';
import { isNumber } from 'util';



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

  public archivoForm = new FormGroup({
    archivo: new FormControl(null, Validators.required),
  });

  @Input() contenido: Contenido
  dir: String = ''
  x: number;
  habilitacion: boolean = true
  porcentaje: Observable<number>
  file: File
  downloadUrl: Observable<String>
  urlPath: string
  urlReal: String
  habilitadoSubir: boolean = true;
  habilitadoExaminar: boolean = false;
  hoy: Date = new Date
  categoriasSeleccionadas: String[] = []
  categorias: any = []

  async ngOnInit() {
    try {
      
      this.categorias = await this.buscarCategorias()
      if (this.contenido === null) {
        this.contenido = new Contenido
        this.categorias = await this.buscarCategorias()
      } else {
        let categorias_checked = await this.categoriasContenido(this.contenido.idContenido)

        this.categorias.forEach( (item, index) => {
          categorias_checked.forEach( (item_checked, index_checked) => {
            if(item["idCategoria"] == item_checked["idCategoria"]) item["checked"] = true
          })
        })
      }
    } catch (error) {
      mostrarError(this, error)
    }
  }

  async buscarCategorias() {
    let categorias = await this.abmService.categorias()
    categorias.forEach( (item, index) => {
      item["checked"] = false
    })

    return categorias
  }

  prepareUpload(e) {
    this.habilitacion = false
    this.file = e.target.files[0]
  }

  uploadFile() {
    this.habilitadoSubir = false
    const id = Math.random().toString(36).substring(2)
    this.urlPath = `uploads/${id}`
    this.dir = id
    const ref = this.storage.ref(this.urlPath)

    console.log(`URL del archivo: ${this.urlPath}`)

    const task = this.storage.upload(this.urlPath, this.file)
    this.porcentaje = task.percentageChanges()
    task.snapshotChanges().pipe(finalize(
      () => {
        this.downloadUrl = ref.getDownloadURL()
        this.downloadUrl.subscribe(url => (this.urlReal = url))
      })
    ).subscribe()


    this.contenido.extensionArchivo = this.file.name.substring(this.file.name.length - 3, this.file.name.length)
  }


 

  

  


  checkCategoria(event) {
    let catId: string = (event.target as Element).id;
    let checked = event.target.checked

    if (checked) {
      this.agregarCategoria(catId)
    } else {
      this.eliminarCategoria(catId)
    }

    this.contenido.listaCategorias = this.categoriasSeleccionadas
    console.log(this.categoriasSeleccionadas)
  }

  eliminarCategoria(cat) {
   this.categoriasSeleccionadas.forEach( (item, index) => {
     if(item === cat) this.categoriasSeleccionadas.splice(index,1)
   })
  }

  agregarCategoria(cat) {
   this.categoriasSeleccionadas.push(cat)
  }

  async categoriasContenido(id: String) {
    return await this.abmService.categoriasContenido(id)
  }


  printContenido(event) {
    console.log(this.contenido)
  }

  getFileUrl() {
    console.log(this.urlReal)
  }

  deleteFile() {
    const ref = this.storage.ref(this.urlPath)
    ref.delete()
  }

  get minimo() {
    var hoy = new Date().toISOString().slice(0, 10);
    return hoy
  }

  get maximo() {
    var hoy = new Date('2020-12-31').toISOString().slice(0, 10);
    return hoy
  }
  


  extensiones: any = extensiones
  // categorias: Categoria[] = [new Categoria('201', 'Deportes'), new Categoria('202', 'Economia'), new Categoria('203', 'Crimen')
  //   , new Categoria('204', 'Politica'), new Categoria('205', 'Ciencia'), new Categoria('207', 'Filosofia')
  //   , new Categoria('208', 'Musica'), new Categoria('209', 'Entretenimiento'), new Categoria('210', 'Otros')]

  extensionSeleccionada: number = 0
  inputArchivo: any = null

  fileData: File = null;
  previewUrl: any = null;
  fileUploadProgress: string = null;
  uploadedFilePath: string = null;

  constructor(private http: HttpClient, private abmService: AbmService, private router: Router, private storage: AngularFireStorage) {

  }

   categoriaChecked(id: String) {
     console.log(id)
     console.log(this.habilitadoExaminar,this.habilitadoSubir)
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
    this.habilitacion = true
    if (this.contenido.idContenido != null) {
      this.contenido.url = this.dir
      await this.abmService.modificarArchivo(this.contenido)
      this.router.routeReuseStrategy.shouldReuseRoute = () => false

    } else {

      this.contenido.url = this.dir
      await this.abmService.agregarArchivo(this.contenido)
      this.router.routeReuseStrategy.shouldReuseRoute = () => false
    }

    this.habilitadoSubir = true
    this.habilitadoExaminar = false
    this.contenido.fechaPublicacion = this.hoy.toISOString().slice(0, 10);
    this.contenido.listaCategorias=this.categoriasSeleccionadas
    this.refrescar()

  }

  refrescar() {
    this.router.navigateByUrl("/botonera",
      { skipLocationChange: true })
      .then(() => this.router.navigate(["/abm"]))

  }


  habilitado() {
    if (this.file !== undefined) {
      this.habilitadoExaminar = true
    }
    return this.habilitadoSubir && this.habilitadoExaminar
  }



  onCancel() {

 console.log(this.habilitadoExaminar,this.habilitadoSubir)
    this.deleteFile
    this.habilitadoSubir = true
    this.habilitadoExaminar = false
    console.log(this.habilitadoExaminar,this.habilitadoSubir,this.poderGuardar)
    this.refrescar()
  }

  poderGuardar() {
    console.log(this.contenido)
  if  (this.contenido.titulo !== undefined  && this.contenido.extensionArchivo !== undefined
    && this.contenido.titulo!=='' && this.contenido.extensionArchivo !=='')
    return true
    else return false

    
  }
}
