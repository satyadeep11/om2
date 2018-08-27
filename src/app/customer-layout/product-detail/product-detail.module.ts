import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductDetailRoutingModule } from './product-detail-routing.module';
import { ProductDetailComponent } from './product-detail.component';

@NgModule({
  imports: [
    CommonModule,
    ProductDetailRoutingModule
  ],
  declarations: [ProductDetailComponent]
})
export class ProductDetailModule { }
