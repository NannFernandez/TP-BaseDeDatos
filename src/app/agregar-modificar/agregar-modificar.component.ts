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

  async ngOnInit() {
    try {
      if (this.contenido === null) {
        this.contenido = new Contenido
      }
    } catch (error) {
      mostrarError(this, error)
    }
  }

  prepareUpload(e) {
    this.habilitacion = false
    this.file = e.target.files[0]
  }

  uploadFile() {
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
  categorias: Categoria[] = [new Categoria('201', 'Deportes'), new Categoria('202', 'Economia'), new Categoria('203', 'Crimen')
    , new Categoria('204', 'Politica'), new Categoria('205', 'Ciencia'), new Categoria('207', 'Filosofia')
    , new Categoria('208', 'Musica'), new Categoria('209', 'Entretenimiento'), new Categoria('210', 'Otros')]

  extensionSeleccionada: number = 0
  categoriasSeleccionadas: number[] = []
  inputArchivo: any = null

  fileData: File = null;
  previewUrl: any = null;
  fileUploadProgress: string = null;
  uploadedFilePath: string = null;

  constructor(private http: HttpClient, private abmService: AbmService, private router: Router, private storage: AngularFireStorage) {

  }

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


    this.refrescar()

  }

  refrescar() {
    this.router.navigateByUrl("/botonera",
      { skipLocationChange: true })
      .then(() => this.router.navigate(["/abm"]))

  }

  habilitarSubir() {

    if (this.dir == '') { return false }
    else { return this.habilitacion }

  }

  onCancel() {

    this.habilitacion = true
    this.refrescar()
  }



}
