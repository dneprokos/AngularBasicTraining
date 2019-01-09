import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class OrderService {
url = 'http://localhost:3000/orders';
  constructor(private http: HttpClient) {
  }

  getOrders() { 
    return this.http.get(this.url, { observe: 'response'});
  }
}
