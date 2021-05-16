import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { OrderProcessingComponent } from './order-processing/order-processing.component';
import { PaymentComponent } from './payment/payment.component';
import { AuthenticationGuard } from './services/authentication.guard';

const routes: Routes = [
  {
    path : 'product',
    loadChildren: () => import('./product/product.module').then(m => m.ProductModule)
  },
  {
    path : 'login',
    component: LoginComponent,
  },
  {
    path : 'cart',
    component: CartComponent,
    canActivate:[AuthenticationGuard]
  },
  {
    path : 'payment',
    component: PaymentComponent,
    canActivate:[AuthenticationGuard]
  },
  {
    path : 'placeorder',
    component: OrderProcessingComponent,
    canActivate:[AuthenticationGuard]
  },
  {
    path : '**',
    redirectTo: 'product'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
