import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { first } from 'rxjs/operators';
import { AccountModel } from '../_Models/account-model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  tokenFieldName = 'token';
  url = 'http://localhost:4000/api/authenticate';

  constructor(private http: HttpClient) { }

  login(credentials): Boolean {
    let isSuccessfull: Boolean;

    this.http.post(this.url, credentials)
    .pipe(first()).subscribe(body =>{     
      if (body){
        let value: AccountModel = body as AccountModel;
        let actToken = value.token;
        localStorage.setItem(this.tokenFieldName, actToken);
        isSuccessfull = true;
      }
      else{
        isSuccessfull = false;
      }
    })
    return isSuccessfull; 
  }

  logout() {
    localStorage.removeItem(this.tokenFieldName);
  }

  isLoggedIn() {
    const jwtHelper = new JwtHelperService();
    // Get token
    const token = this.getToken();

    if (!token) {
      return false;
    } else {
      // Get token expiration date
      const expirationDate = jwtHelper.getTokenExpirationDate(token);
      if (expirationDate === null) {
        return true;
      } else {
        const isExpired = jwtHelper.isTokenExpired(token);
        return !isExpired;
      }
    }
  }

  get getCurrentUser() {
    const token = this.getToken();
    if (!token) {
      return null;
  }
    return new JwtHelperService().decodeToken(token);
  }

  // Helpers
  getToken(): string {
    return localStorage.getItem(this.tokenFieldName);
  }
}
