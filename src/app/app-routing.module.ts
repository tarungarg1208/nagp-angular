import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { OrderProcessingComponent } from './order-processing/order-processing.component';
import { PaymentComponent } from './payment/payment.component';

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
  },
  {
    path : 'payment',
    component: PaymentComponent
  },
  {
    path : 'placeorder',
    component: OrderProcessingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
