import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { IProduct } from '../../data/IProduct';
import { DataService } from '../../data/data.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent implements OnInit{
  products: IProduct[] = [];
  filteredProducts: IProduct[] = [];
  searchField = '';
  qty = 0;
  isGuest = true;
  constructor(private router: Router, private dataService: DataService) {}
  
  ngOnInit(): void {
    this.isGuest = this.dataService.isGuest();
  }

  onSearchChange() {
    this.filteredProducts = this.products.filter(
      (product) =>
        product.name?.toLowerCase().includes(this.searchField.toLowerCase()) ||
        product.description
          ?.toLowerCase()
          .includes(this.searchField.toLowerCase())
    );
  }

  addToCart() {
    //TODO Call API
    return;
  }
}
