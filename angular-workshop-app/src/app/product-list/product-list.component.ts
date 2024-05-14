import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  imports:[NgFor,RouterModule],
  standalone: true
})
export class ProductListComponent {
  products: any[];

  constructor(private productService: ProductService) {
    this.products = this.productService.getProducts();
  }
}
