import { Component, OnInit } from '@angular/core';
import { Product } from '../data/product-data';
import { ProductServiceService } from '../services/product-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  products_cart: Product[] = [];
  constructor(private productService: ProductServiceService) { }

  ngOnInit(): void {
    this.products_cart = this.productService.getCartProducts();
  }
}
