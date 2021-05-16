import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailPageComponent } from './product-detail-page/product-detail-page.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  {
    path : '',
    component: ProductListComponent
  },
  {
    path : 'pdp',
    component: ProductDetailPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
