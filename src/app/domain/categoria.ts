export class Categoria {
    constructor(
        public id?: number,
        public nombre?: string,
        ) { }

    static fromJson(archivoJSON): Categoria {
        return Object.assign(new Categoria(), archivoJSON)
    }

    toJSON(): any {
        return {
            ...this,
        }
    }
}
