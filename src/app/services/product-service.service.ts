import { Injectable, ɵɵsetComponentScope } from '@angular/core';
import { Product, ProductCart } from 'src/app/data/product-data'

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
    },
    {
      'id': 4,
      'name': 'Dabur Amla Hair Oil',
      'description': 'Hair Oil',
      'price': 199
    },
    {
      'id': 5,
      'name': 'Vim Liquid',
      'description': 'Dishwash Liquid Gel',
      'price': 105
    },
    {
      'id': 6,
      'name': 'Head & Shoulder Shampoo',
      'description': 'Shampoo',
      'price': 650
    },
    {
      'id': 7,
      'name': 'Ariel Top Load Liquid',
      'description': 'Liquid Detergent',
      'price': 199
    },
    {
      'id': 8,
      'name': 'Bournvita',
      'description': 'Health Drink',
      'price': 390
    }
  ]
  cart_product_id:number[]=[];
  cart_products: ProductCart[]=[];
  getProducts(){
    return this.products;
  }
  // addProductToCart(product_id:number){
  //   if(!this.cart_product_id.includes(product_id)){
  //     this.cart_product_id.push(product_id)
  //   }
  //   else
  //   {
  //     console.log(`Product Id:${product_id}, is already in Cart`)
  //   }
  // }
  addProductToCart(product_id:number){
    for(var product of this.cart_products){
      if(product.product.id==product_id){
        product.qty=product.qty+1
        product.amount=product.amount+product.product.price
        console.log("Product already exists in cart. Adding quantity by 1")
        return;
      }
    }
    let new_product_cart:ProductCart={'product':this.products[product_id-1],'qty':1,'amount':this.products[product_id-1].price}
    this.cart_products.push(new_product_cart)
    console.log("NEW PRODUCT ADDED")
  }
  getCartProducts(){
    return this.cart_products
  }
  emptyCart(){
    console.log("Clearing Cart")
    this.cart_products=[]
    console.log("Cart is now empty.")
  }
}
