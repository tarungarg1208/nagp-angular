import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/data/product-data';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-product-detail-page',
  templateUrl: './product-detail-page.component.html',
  styleUrls: ['./product-detail-page.component.scss']
})
export class ProductDetailPageComponent implements OnInit {
  products: Product[] = [];
  productView: Product = {'id':0, 'name':'NA', 'price':0,'description':'NA'};
  constructor(private productService: ProductServiceService, private route: ActivatedRoute) { }
  
  ngOnInit(): void {
    this.products=this.productService.getProducts()
    let id = this.route.snapshot.paramMap.get('id') as any;
    this.productView = this.products[id-1]
  }

}
