import { Injectable } from '@angular/core';
import { Product } from 'src/app/data/product-data'

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor() { }
  products: Product[] = [
    {
      'id': 1,
      'name': 'Tide',
      'description': 'Detergent Powder',
      'price': 200
    },
    {
      'id': 2,
      'name': 'Pears',
      'description': 'Soap',
      'price': 50
    },
    {
      'id': 3,
      'name': 'Vaseline Body Lotion',
      'description': 'Body Lotion',
      'price': 350
    }
  ]
  cart_product_id:number[]=[];
  getProducts(){
    return this.products;
  }
  addProductToCart(product_id:number){
    if(!this.cart_product_id.includes(product_id)){
      this.cart_product_id.push(product_id)
    }
    else
    {
      console.log(`Product Id:${product_id}, is already in Cart`)
    }
  }
  getCartProductIds(){
    return this.cart_product_id;
  }
  getCartProducts(){
    var current_cart:Product[]=[];
    for(var productId of this.cart_product_id){
      console.log("PROCESSING PRODUCT ID",productId)
      current_cart.push(this.products[productId-1])
    }
    return current_cart;
  }
}
