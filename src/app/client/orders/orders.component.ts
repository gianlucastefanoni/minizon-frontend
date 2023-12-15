import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyCart } from '../../data/MyCart';
import { MyOrder } from '../../data/MyOrder';
import { Router, RouterLink } from '@angular/router';
import { DataService } from '../../data/data.service';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css',
})
export class OrdersComponent implements OnInit {
  cart: MyCart = {
    id_cart: null,
    id_client: null,
    insert_date: null,
    products: [],
  };
  orders: MyOrder[] = [];

  constructor(private router: Router, private dataService: DataService) {}

  ngOnInit(): void {
    if (this.dataService.isGuest()) this.router.navigateByUrl('/login');
    //TODO set orders
  }

  removeProduct() {
    //TODO remove product from cart
    return;
  }

  sendOrder() {
    //TODO order product from cart
    return;
  }
}
