import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ProductService } from '../product.service';
import { NgIf } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [RouterModule, NgIf],
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnDestroy {
  productId?: number;
  product: any;
  private routeSubscription: Subscription;

  constructor(private route: ActivatedRoute, private productService: ProductService) {
    this.routeSubscription = this.route.paramMap.subscribe(paramMap => {
      this.productId = Number(paramMap.get('productId'));
      this.product = this.productService.getProductById(this.productId);
    });
  }

  ngOnDestroy() {
    this.routeSubscription.unsubscribe();
  }
}

