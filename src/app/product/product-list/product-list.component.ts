import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/data/product-data';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  constructor(private productService: ProductServiceService) { }

  ngOnInit() {
    this.products=this.productService.getProducts()
    console.log(this.products)
  }
  addToCart(productid: number){
    console.log("Added",productid)
    this.productService.addProductToCart(productid)
    // console.log("cart status",this.productService.getCartProductIds())
  }

}
