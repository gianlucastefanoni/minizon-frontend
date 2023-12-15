import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../data/IProduct';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../../data/data.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent implements OnInit {
  product: IProduct = {
    id_product: null,
    name: null,
    description: null,
    price: null,
    qty_available: null,
    width: null,
    height: null,
    visible: false,
    creation_date: null,
  };
  qty = 0;
  submitted = false;
  constructor(private router: Router, private dataService: DataService) {}

  ngOnInit(): void {
    if (!this.dataService.isAdmin()
    )
      this.router.navigateByUrl('/admin/login');

    //TODO get product
  }

  removeProduct() {
    //TODO remove product
    return;
  }
  updateProduct() {
    //TODO update product
    return;
  }
  hideProduct() {
    //TODO hide product
    return;
  }
  showProduct() {
    //TODO show product
    return;
  }
}
