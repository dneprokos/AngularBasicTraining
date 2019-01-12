import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class OrderService {
url = 'http://localhost:4000/api/orders';
  constructor(private http: HttpClient) {}

  getOrders() {
    const token = localStorage.getItem('token');     
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + token
      })
    };

      
    return this.http.get(this.url, httpOptions);
  }
}
