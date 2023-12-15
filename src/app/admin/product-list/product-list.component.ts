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
export class ProductListComponent implements OnInit {
  products: IProduct[] = [];
  filteredProducts: IProduct[] = [
    {
      id_product: 0,
      name: 'prodotto',
      description: 'descrizione',
      price: 13,
      qty_available: null,
      width: null,
      height: null,
      visible: false,
      creation_date: null,
    },
    {
      id_product: 2,
      name: 'prodotto',
      description: 'descrizione',
      price: 11,
      qty_available: null,
      width: null,
      height: null,
      visible: true,
      creation_date: null,
    },
  ];
  searchField = '';
  qty = 0;
  newPath = '../../assets/plus.svg';
  constructor(private router: Router, private dataService: DataService) {}

  ngOnInit(): void {
    if (!this.dataService.isAdmin()
    )
      this.router.navigateByUrl('/admin/login');
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
  createNewProduct() {
    //TODO create new product
    return;
  }
}
