import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {


  datos:any[]=[
    //{mensaje:"Hola mundo",tipo:"success"},
    //{mensaje:"Hola mundo",tipo:"danger"},
    //{mensaje:"Hola mundo",tipo:"primary"}
  ]

  /**
   * Funcionalidad para crear mensajes
   * @param mensaje //hola mundo
   * @param tipo //success, danger, primary
   */
  Load(mensaje:string,tipo:string,tiempo:number){
    this.datos.push({mensaje:mensaje, tipo:tipo})
    this.Borrar(tiempo)
  }

 Borrar(tiempo:number){
  setTimeout(()=>{
    this.datos.splice(0,1)
  },tiempo)
 } 

}
