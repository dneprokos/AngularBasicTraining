import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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
    private route: ActivatedRoute,
    private authService: AuthService) { }

  signIn(credentials) {
    let result = this.authService.login(credentials);
    if (result){
      const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
      this.router.navigate([ returnUrl || '/']);
    }
    else {
      this.invalidLogin = true;
    }
  }
}
