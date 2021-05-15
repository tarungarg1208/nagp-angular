import { Injectable } from '@angular/core';
import { Product } from '../data/product-data'

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
    }
  ]

}
