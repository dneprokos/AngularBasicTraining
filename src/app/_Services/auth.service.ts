import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token: string = 'token'; 
  url : string = `http://localhost:4000/authenticate`;
  accounts: any [] = [
    {
      id: "1",
      email: "test@test.com",
      password: "test",
      token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ik1vc2ggSGFtZWRhbmkiLCJhZG1pbiI6dHJ1ZX0.iy8az1ZDe-_hS8GLDKsQKgPHvWpHl0zkQBqy1QIPOkA"
    },
    {
      id: "2",
      email: "test2@test.com", 
      password: "Test3",
      token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ik1vc2ggSGFtZWRhbmkiLCJhZG1pbiI6dHJ1ZX0.iy8az1ZDe-_hS8GLDKsQKgPHvWpHl0zkQBqy1QIPOkA"
    },
  ]

  responseBody: any;
  constructor(private http: HttpClient) { }

  login(credentials): Boolean { 
    let result = this.getAuthToken(credentials);
    if (result !== null && result.token){
      localStorage.setItem(this.token, result.token);
      return true;
    }
    else
      return false;   
  }    
 
  logout() {
    localStorage.removeItem(this.token); 
  }
 
  isLoggedIn() {
    let jwtHelper = new JwtHelperService();
    //Get token
    let token = localStorage.getItem(this.token);

    if (!token)
      return false;   
    else{
      //Get token expiration date
      let expirationDate = jwtHelper.getTokenExpirationDate(token);
      if (expirationDate === null)
        return true;      
      else{
        let isExpired = jwtHelper.isTokenExpired(token);
        return !isExpired;
      }     
    }    
  }

  //Stub
  private getAuthToken(credentials){
    let obj = this.accounts
    .find(obj => obj.name === credentials.name 
      &&  obj.password === credentials.password);
      
    if (obj === undefined)
      return null;
    else if (obj.token)
      return ({ token: obj.token });
  }
}
