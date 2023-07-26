import { Component, OnInit } from '@angular/core';
import { MessagesService } from 'src/app/services/messages.service';
import { PetitionService } from 'src/app/services/petition.service';

declare var $:any


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {


constructor(private petition: PetitionService, private msg:MessagesService){}

  id:string=""
  product:string=""
  price:string=""
  emailSession:string=""
  email:string=this.emailSession
  adress:string=""
  estado:string=""
  quantity:string=""
  data:any[] = []

ngOnInit(): void {
  this.emailSession
  this.cargarEmail(this.emailSession)
  this.show()
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
this.emailSession = res.email
console.log(this.emailSession)

})
}

cargarEmail(email:string){
  console.log(email)
  this.state()


  var post={
    host: this.petition.urllocal,
    path:'/cart/cargarEmail',
    payload: {
      email:this.emailSession
    }
  }

this.petition.Post(post.host + post.path,post.payload).then((res:any)=>{
console.log(res)
this.email = this.emailSession
console.log(this.email)
console.log(this.emailSession)

})      
}

  show(){

    this.cargarEmail(this.email)

    var post={
      host: this.petition.urllocal,
      path:'/cart/show',
      payload: {}
    }

this.petition.Post(post.host + post.path,post.payload).then((res:any)=>{
  console.log(res)
  this.data = res.data.datos
})

console.log(this.email)
console.log(this.emailSession)

  }




}