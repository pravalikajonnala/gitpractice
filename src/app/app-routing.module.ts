import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomersComponent } from './customers/customers.component';
import { OrdersComponent } from './orders/orders.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CustomerOrdersComponent } from './customer-orders/customer-orders.component';
import { PravalikaComponent } from './pravalika/pravalika.component';
import { JonnalaComponent } from './jonnala/jonnala.component';

const routes: Routes = [
  {path:'', redirectTo:'/orders',pathMatch:"full"},
  {path:'customers',component:CustomersComponent},
   {path:'orders/:id/:item',component:CustomerOrdersComponent},
  {path:'orders',component:OrdersComponent},
  {path: 'pravalika',component:PravalikaComponent},
  {path:'jonnala',component:JonnalaComponent},
 {path:"**", component:PageNotFoundComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingcomponent=[CustomersComponent,OrdersComponent,PageNotFoundComponent,CustomerOrdersComponent]