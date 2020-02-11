export class Contenido {
  
    
    idContenido: String
    titulo: String= ''
    fechaPublicacion: String 
    extensionArchivo: String  = ''
    url: String = 'asdasdasd'
    categorias 
    hoy: Date= new Date


    constructor(_id?: String, _titulo?: String,_fecha?: String, _ext?: String,_url?: String) {
        this.idContenido = _id
        this.titulo = _titulo
        this.fechaPublicacion= this.hoy.getFullYear().toString()+'-'+(this.hoy.getMonth() + 1).toString() +'-'+this.hoy.getDate().toString()
        this.extensionArchivo=_ext
        this.url=_url
    }

    diaDeHoy(){

        return this.hoy.getDate().toString() + (this.hoy.getMonth() + 1).toString(), this.hoy.getFullYear().toString()
    }

    static fromJson(categoriaJson): Contenido {
        return Object.assign(new Contenido(), categoriaJson)
    }

    toJSON(): any {
        return {
            ...this,
        }
    }
}
