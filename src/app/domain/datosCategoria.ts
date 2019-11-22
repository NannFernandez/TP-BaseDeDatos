export class DatosCategoria {
    idContenido: String 
    titulo: String
    edadMedia: String
    trasnfMedia: String

    constructor (_idContenido?: String,_titulo?: String,_edadMedia?: String,_transfMedia?: String,_porcentajeCat?: String){
        this.idContenido = _idContenido
        this.titulo = _titulo
         this.edadMedia = _edadMedia
        this.trasnfMedia = _transfMedia
        }
        
        static fromJson(categoriaJSON):DatosCategoria {
            console.log(categoriaJSON) ;
           
            return Object.assign(new DatosCategoria(), categoriaJSON)
            
        }  
}
