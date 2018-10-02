import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './orders.component';

import { OrdersRoutingModule } from './orders-routing.module';
import { PageHeaderModule } from '../../shared';
import { SingleOrderComponent } from './single-order/single-order.component';

@NgModule({
  imports: [
    CommonModule,OrdersRoutingModule,PageHeaderModule
  ],
  declarations: [OrdersComponent, SingleOrderComponent]
})
export class OrdersModule { } 
