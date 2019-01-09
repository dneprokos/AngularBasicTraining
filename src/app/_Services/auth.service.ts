import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url : string = `http://localhost:4000/authenticate`;
  responseBody: any;
  constructor(private http: HttpClient) { }

  login(credentials) { 
    //return this.http
    //.post<any>( this.url, JSON.stringify(credentials))
    console.log(credentials);
    }    
 
   logout() { 
   }
 
   isLoggedIn() { 
     return false;
   }
}
