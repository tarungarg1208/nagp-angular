import { Component, OnInit } from '@angular/core';
import { Product, ProductCart } from '../data/product-data';
import { ProductServiceService } from '../services/product-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  products_cart: ProductCart[] = [];
  constructor(private productService: ProductServiceService) { }

  ngOnInit(): void {
    this.products_cart = this.productService.getCartProducts();
  }
  clearCart(){
    console.log("Clearing Cart")
    this.productService.emptyCart()
  }
}
