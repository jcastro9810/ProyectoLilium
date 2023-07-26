import { Component, OnInit } from '@angular/core';
import { MessagesService } from 'src/app/services/messages.service';
import { PetitionService } from 'src/app/services/petition.service';

declare var $:any


@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {


constructor(private petition: PetitionService, private msg:MessagesService){}

  product:string=""
  price:string=""
  quantity:string=""
  email:string=""
  adress:string=""
  data:any[] = []
  id:string=""
  estado:string=""


  ngOnInit(){
    this.show()
  }


delete(id:string){

  console.log(id)

  var post={
    host: this.petition.urllocal,
    path:'/cart/delete',
    payload: {
      id:id
    }
  }

this.petition.Post(post.host + post.path,post.payload).then((res:any)=>{

if(res.state == false){
  this.msg.Load(res.message || res.mensaje,'danger',4000)
 }else{
   this.msg.Load(res.message || res.mensaje,'success',4000)
   this.show()
 }

})

}

  show(){

    var post={
      host: this.petition.urllocal,
      path:'/cart/show',
      payload: {}
    }

this.petition.Post(post.host + post.path,post.payload).then((res:any)=>{
  console.log(res)
  this.data = res.data.datos  
})

  }

  update(){

    var post={
      host: this.petition.urllocal,
      path:'/cart/update',
      payload: {
        id:this.id,
        estado:this.estado
      }
    }

this.petition.Post(post.host + post.path,post.payload).then((res:any)=>{
  console.log(res)
  if(res.state == false){
    this.msg.Load(res.message || res.mensaje,'danger',4000)
   }else{
     this.msg.Load(res.message || res.mensaje,'success',4000)
     this.show()
     $('#exampleModal').modal('hide')
   }

})

  }

  edit(id:string){
      console.log(id)


      var post={
        host: this.petition.urllocal,
        path:'/cart/cargarId',
        payload: {
          id:id
        }
      }
  
  this.petition.Post(post.host + post.path,post.payload).then((res:any)=>{
console.log(res.datos[0])
this.id = res.datos[0]._id

    
  })      

      $('#exampleModal').modal('show')
  }
}
