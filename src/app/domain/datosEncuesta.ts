export class DatosEncuesta {
   
    titulo: String ='La wachicolera'
    fecha: String= '2019-06-15'
    mediaPuntaje: String = '20.5'
    cantEncuestas: String = '3'
    categoria: String = 'Musica Clasica'

    constructor (_titulo?: String,_extensionArchivo?: String,_idDesacarga?: String,_velocidadTransf?: String){}

 
    static fromJson(descargasJSON):DatosEncuesta {
        console.log(descargasJSON) ;
       
        return Object.assign(new DatosEncuesta(), descargasJSON)
        
    }  
}
