import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path : 'product',
    loadChildren: () => import('./product/product.module').then(m => m.ProductModule)
  },
  {
    path : 'login',
    component: LoginComponent
  },
  {
    path : 'cart',
    component: CartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
