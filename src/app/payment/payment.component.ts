import { Component, OnInit } from '@angular/core';
import { Product, ProductCart } from '../data/product-data';
import { ProductServiceService } from '../services/product-service.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  products_cart: ProductCart[] = [];
  total_amount: number = 0;
  constructor(private productService: ProductServiceService) { }

  ngOnInit(): void {
    this.products_cart = this.productService.getCartProducts();
    for(var product of this.products_cart){
      this.total_amount+=product.amount;
    }
  }

  placeOrder(){
    console.log("PLACING ORDER")
    this.productService.emptyCart()
  }

}
