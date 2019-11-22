export class DatosEncuesta {
   
    titulo: String ='La wachicolera'
    ext: String = 'PDF'
    fecha: String= '2019-06-15'
    mediaPuntaje: String = '20.5'
    cantEncuestas: String = '3'
   

    constructor (_titulo?: String,_extensionArchivo?: String,_idDesacarga?: String,_velocidadTransf?: String){


    }

 
    static fromJson(encuestaJSON):DatosEncuesta {
        console.log(encuestaJSON) ;
        return Object.assign(new DatosEncuesta(), encuestaJSON)
        
    }  
}
