import { Component, OnInit } from '@angular/core';
import { MessagesService } from 'src/app/services/messages.service';
import { PetitionService } from 'src/app/services/petition.service';

declare var $:any

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

constructor(private petition: PetitionService, private msg:MessagesService){}

  id:string=""
  product:string=""
  price:string=""
  quantity:string=""
  data:any[] = []

  ngOnInit(){
    this.show()
  }

  show(){

    var post={
      host: this.petition.urllocal,
      path:'/product/show',
      payload: {}
    }

this.petition.Post(post.host + post.path,post.payload).then((res:any)=>{
  console.log(res)
  this.data = res.data.datos  
})

  }

  edit(id:string){
    console.log(id)
    var post={
      host: this.petition.urllocal,
      path:'/product/cargarId',
      payload: {
        id:id
      }
    }

this.petition.Post(post.host + post.path,post.payload).then((res:any)=>{
console.log(res.datos[0])
this.id = res.datos[0]._id
this.quantity = res.datos[0].quantity  
})      


    $('#exampleModal').modal('show')
}

  update(){

    var post={
      host: this.petition.urllocal,
      path:'/product/update',
      payload: {
        quantity:this.quantity,
        id:this.id
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
}

