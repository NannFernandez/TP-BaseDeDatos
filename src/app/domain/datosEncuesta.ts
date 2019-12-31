export class DatosEncuesta {
   
    titulo: String 
    ext: String 
    fecha: String
    mediaPuntaje: String 
    cantEncuestas: String 
   

    constructor (_titulo?: String,_extensionArchivo?: String,_idDesacarga?: String,_velocidadTransf?: String){


    }

 
    static fromJson(encuestaJSON):DatosEncuesta {
        console.log(encuestaJSON) ;
        return Object.assign(new DatosEncuesta(), encuestaJSON)
        
    }  
}
