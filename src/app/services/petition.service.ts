import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PetitionService {

  constructor(private http:HttpClient) { }

urllocal:string = "http://localhost:3000"

/**
 * 
 * @param url http://dominio:puerto/path
 * @param data {nombre: 'Juan'}
 * @returns
 */
Post(url:string,data:{}){

  let promise = new Promise((resolve,reject)=>{

    this.http.post(url,data)
    .toPromise()
    .then((res:any) => {
      resolve(res)
    }
    )

  })

  return promise

}

Get(url:string,data:{}){
  let promise = new Promise((resolve,reject)=> {
    this.http.get(url)
    .toPromise()
    .then((res:any) => {
      console.log(res)
      resolve(res)
    }
    )
  })
  return promise
}
}
