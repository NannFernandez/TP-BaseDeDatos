export class Contenido {
    idContenido: String
    titulo: String
    fechaPublicacion: String
    extensionArchivo: String 
    categorias 

    constructor(_id?: String, _titulo?: String,_fecha?: String, _ext?: String) {
        this.idContenido = _id
        this.titulo = _titulo
        this.fechaPublicacion=_fecha
        this.extensionArchivo=_ext
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
