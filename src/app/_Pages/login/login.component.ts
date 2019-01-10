import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from 'src/app/_Services/auth.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  invalidLogin: boolean; 

  constructor(
    private router: Router, 
    private authService: AuthService) { }

  signIn(credentials) {
    let isSussessfull = this.authService.login(credentials);
    isSussessfull ? this.router.navigate(['/']) : this.invalidLogin = true;
  }
}
