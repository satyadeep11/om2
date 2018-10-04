import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './orders.component';

import { OrdersRoutingModule } from './orders-routing.module';
import { PageHeaderModule } from '../../shared';
import { SingleOrderComponent } from './single-order/single-order.component';
import { AddProductComponent } from './add-product/add-product.component';
import {MatStepperModule,MatFormFieldModule,MatInputModule,MatSelectModule} from '@angular/material';
import { SearchProductFilterPipe} from './searchproductfilter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  imports: [
    CommonModule,OrdersRoutingModule,PageHeaderModule,MatStepperModule,MatFormFieldModule,MatInputModule,MatSelectModule,FormsModule, ReactiveFormsModule,MatSnackBarModule
  ],
  declarations: [OrdersComponent, SingleOrderComponent, AddProductComponent,SearchProductFilterPipe]
})
export class OrdersModule { } 
