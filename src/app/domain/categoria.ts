export class Categoria {
    idCategoria: String
    descCategoria: String

    constructor(_id?: String, _desc?: String) {
        this.idCategoria = _id
        this.descCategoria = _desc
    }

    static fromJson(categoriaJson): Categoria {
        return Object.assign(new Categoria(), categoriaJson)
    }

    toJSON(): any {
        return {
            ...this,
        }
    }
}
