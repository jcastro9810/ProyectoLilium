import { Component, OnInit } from '@angular/core';
import { MessagesService } from 'src/app/services/messages.service';
import { PetitionService } from 'src/app/services/petition.service';

declare var $:any

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

constructor(private petition: PetitionService, private msg:MessagesService){}

  name:string=""
  email:string=""
  phone:string=""
  password:string=""
  rol:string=""
  adress:string=""
  data:any[] = []
  id:string=""

  ngOnInit(){
    this.show()
  }

new(){
  $('#exampleModal').modal('show')
  this.id=""
  this.name=""
  this.email=""
  this.phone=""
  this.password=""
  this.adress=""
  this.rol=""
}

delete(id:string){

  console.log(id)

  var post={
    host: this.petition.urllocal,
    path:'/user/delete',
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
      path:'/user/show',
      payload: {}
    }

this.petition.Post(post.host + post.path,post.payload).then((res:any)=>{
  this.data = res.data.datos  
})

  }

  save(){

    var post={
      host: this.petition.urllocal,
      path:'/user/save',
      payload: {
        name:this.name,
        email:this.email,
        phone:this.phone,
        password:this.password,
        rol:this.rol,
        adress:this.adress
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

  update(){

    var post={
      host: this.petition.urllocal,
      path:'/user/update',
      payload: {
        name:this.name,
        email:this.email,
        phone:this.phone,
        password:this.password,
        rol:this.rol,
        adress:this.adress,
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

  edit(id:string){
      console.log(id)


      var post={
        host: this.petition.urllocal,
        path:'/user/cargarId',
        payload: {
          id:id
        }
      }
  
  this.petition.Post(post.host + post.path,post.payload).then((res:any)=>{
console.log(res.datos[0])
this.id = res.datos[0]._id
this.name = res.datos[0].name
this.email = res.datos[0].email
this.phone = res.datos[0].phone
this.adress = res.datos[0].adress



    
  })      


      $('#exampleModal').modal('show')
  }
}

