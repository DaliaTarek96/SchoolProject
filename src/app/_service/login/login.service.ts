import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseUrl="http://localhost:8000/login";

  userLogin(user:object){
    console.log(user);
   return this.http.post(this.baseUrl,user);
  }
  // set id
  setUserId(id){
    return this.http.put('http://localhost:8000/save',{Value:id});
  }
  //get id
  getUserId(){
    return this.http.get('http://localhost:8000/save');
  }
  constructor( private http:HttpClient) { }
}
