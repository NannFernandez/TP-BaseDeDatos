
export class DatosDescarga {
  
    titulo: String
    extensionArchivo: String
    idDesacarga: String
    velocidadTransf: String 

    constructor (_titulo?: String,_extensionArchivo?: String,_idDesacarga?: String,_velocidadTransf?: String){
    this.titulo = _titulo
    this.extensionArchivo = _extensionArchivo
    this.idDesacarga = _idDesacarga
    this.velocidadTransf = _velocidadTransf
    }
    
    static fromJson(descargasJSON):DatosDescarga {
        console.log(descargasJSON) ;
       
        return Object.assign(new DatosDescarga(), descargasJSON)
        
    }        
          
}
