import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_Services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  invalidLogin: boolean;
  archives = [
    {year: 2018, month: 1},
    {year: 2018, month: 2},
    {year: 2018, month: 3}
  ]

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

}
