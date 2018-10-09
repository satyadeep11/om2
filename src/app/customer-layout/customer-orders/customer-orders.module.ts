import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerOrdersComponent } from './customer-orders.component';
import { CustomerOrdersRoutingModule } from './customer-orders-routing.module';

@NgModule({
  imports: [
    CommonModule,
    CustomerOrdersRoutingModule 
  ],
  declarations: [CustomerOrdersComponent]
})
export class CustomerOrdersModule { } 
