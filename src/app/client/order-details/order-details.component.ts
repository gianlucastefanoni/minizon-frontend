import { Component, OnInit } from '@angular/core';
import { OrderDetails } from '../../data/OrderDetails';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { DataService } from '../../data/data.service';

@Component({
  selector: 'app-order-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order-details.component.html',
  styleUrl: './order-details.component.css',
})
export class OrderDetailsComponent implements OnInit {
  order: OrderDetails = {
    products: [],
    id_order: null,
    id_client: null,
    insert_date: null,
    accept_date: null,
    ship_date: null,
    street: null,
    city: null,
    zip_code: null,
    nation: null,
    cancel_date: null,
  };
  cancellable = true;
  constructor(private router: Router, private dataService: DataService) {}

  ngOnInit(): void {
    if (this.dataService.isGuest()) this.router.navigateByUrl('/login');
    //TODO set orderDetais

    this.cancellable = !(
      this.order.ship_date !== null &&
      this.order.ship_date !== 'null' &&
      this.order.ship_date !== '' &&
      this.order.cancel_date !== null &&
      this.order.cancel_date !== 'null' &&
      this.order.cancel_date !== ''
    );
  }

  cancelOrder() {
    //TODO cancel order
    return;
  }
}
