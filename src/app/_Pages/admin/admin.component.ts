import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/_Services/order.service';
import { first } from 'rxjs/operators';
import { OrderModel } from 'src/app/_Models/order-model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  orders: String [];

  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.loadAllOrders();
  }

  private loadAllOrders() {
    this.orderService.getOrders()
    .pipe(first()).subscribe(orders =>{
      if (orders !== null){
        let returnedOrders: OrderModel [] = orders as [];
        this.orders = returnedOrders.map(o =>o.name);
      }     
    });
  }
}
