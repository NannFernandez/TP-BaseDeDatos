export class Contenido {
    idContenido: String
    titulo: String
    fechaPublicacion: String = '2020-02-07'
    extensionArchivo: String 
    url: String = 'asdasdasd'
    categorias 

    constructor(_id?: String, _titulo?: String,_fecha?: String, _ext?: String,_url?: String) {
        this.idContenido = _id
        this.titulo = _titulo
        this.fechaPublicacion=_fecha
        this.extensionArchivo=_ext
        this.url=_url
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
