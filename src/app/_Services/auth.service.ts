import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FakeAuthService } from './fake-auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url : string = `http://localhost:4000/authenticate`;
  responseBody: any;
  constructor(private http: HttpClient, private fakeService: FakeAuthService) { }

  login(credentials) { 
    this.fakeService.getAuthToken(credentials);
  }    
 
  logout() { 
  }
 
  isLoggedIn() { 
    return false;
  }
}
