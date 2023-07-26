import { Component, OnInit } from '@angular/core';
import { MessagesService } from 'src/app/services/messages.service';
import { PetitionService } from 'src/app/services/petition.service';

declare var $:any

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


constructor(private petition: PetitionService, private msg:MessagesService){}

  email:string=""
  password:string=""
  welcome:string=""
  rol:string=""
  adress:string=""
  name:string=""
  phone:string=""

  ngOnInit(): void {
this.state()
  }

  state(){

    var post={
      host: this.petition.urllocal,
      path:'/state',
      payload: {
      }
    }
this.petition.Post(post.host + post.path,post.payload).then((res:any)=>{
  console.log(res)
  this.rol = res.rol
  this.name=res.name
  this.welcome = "Hola, " + this.name + "!"
})
  }

  login(){

    var post={
      host: this.petition.urllocal,
      path:'/user/login',
      payload: {
        email:this.email,
        password:this.password
      }
    }
this.petition.Post(post.host + post.path,post.payload).then((res:any)=>{
  console.log(res)
  if(res.state == false){
    this.msg.Load(res.message || res.mensaje,'danger',4000)
   }else{
    console.log(res)
     console.log(this.welcome)
     this.state()
   }

})
  }

  logout(){

    var post={
      host: this.petition.urllocal,
      path:'/user/logout',
      payload: {
      }
    }
this.petition.Post(post.host + post.path,post.payload).then((res:any)=>{
  console.log(res)
  this.msg.Load(res.message || res.mensaje,'success',4000)
  this.state()
})
  }

}


