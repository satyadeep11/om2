import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductDetailRoutingModule } from './product-detail-routing.module';
import { ProductDetailComponent } from './product-detail.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  imports: [
    CommonModule,
    ProductDetailRoutingModule,
    MatSnackBarModule
  ],
  declarations: [ProductDetailComponent]
})
export class ProductDetailModule { }
