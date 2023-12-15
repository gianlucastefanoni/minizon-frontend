import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IOrderHead } from '../../data/IOrderHead';
import { DataService } from '../../data/data.service';

@Component({
  selector: 'app-manage-orders',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './manage-orders.component.html',
  styleUrl: './manage-orders.component.css',
})
export class ManageOrdersComponent implements OnInit {
  orders: IOrderHead[] = [];
  constructor(private router: Router, private dataService: DataService) {}

  ngOnInit(): void {
    if (!this.dataService.isAdmin()
    )
      this.router.navigateByUrl('/admin/login');
  }

  shipOrder() {
    //TODO ship order
    return;
  }
  cancelOrder() {
    //TODO cancel order
    return;
  }
}
