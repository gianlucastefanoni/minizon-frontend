import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../data/IProduct';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
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
    id_product: 4,
    name: "Prodotto esempio",
    description: "Descrizione",
    price: 12,
    qty_available: 1,
    width: 123,
    height: 321,
    visible: true,
    creation_date: null,
  };
  qty = 0;
  isGuest = true;
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.isGuest = this.dataService.isGuest();
    //TODO get product
    return;
  }

  addToCart() {
    //TODO add to cart
    return;
  }
}
