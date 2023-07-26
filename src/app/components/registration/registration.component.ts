import { Component, OnInit } from '@angular/core';
import { MessagesService } from 'src/app/services/messages.service';
import { PetitionService } from 'src/app/services/petition.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit{
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
    this.name=""
    this.email=""
    this.phone=""
    this.password=""
    this.adress=""
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
        adress:this.adress
      }
    }

this.petition.Post(post.host + post.path,post.payload).then((res:any)=>{
  console.log(res)
  if(res.state == false){
    this.msg.Load(res.message || res.mensaje,'danger',4000)
   }else{
     this.msg.Load(res.message || res.mensaje,'success',4000)
   }

})
  }
  

}

