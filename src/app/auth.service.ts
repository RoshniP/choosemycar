import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  addUser(user:any){
    return this.http.post("https://car-server1.herokuapp.com/adduser", {"user" : user})
    .subscribe(data => {console.log(data)})
  }

  loginUser(user: any){
    return this.http.post<any>("https://car-server1.herokuapp.com/login" , user) 
  }

  getToken(){    //function to get token value from client side
    return localStorage.getItem('token');
  }
  loggedIn(){
    return !!localStorage.getItem('token'); //boolean value(true/false) , whether user logged in or not
  }
}
