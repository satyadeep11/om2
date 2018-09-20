import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductDetailRoutingModule } from './product-detail-routing.module';
import { ProductDetailComponent } from './product-detail.component';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {MatSnackBarModule} from '@angular/material/snack-bar';

import { ImagePreloader } from '../components/img-preload';


@NgModule({
  imports: [
    CommonModule,
    ProductDetailRoutingModule,
    MatSnackBarModule,
    NgbModule 
  ],
  declarations: [ProductDetailComponent,ImagePreloader]  

})
export class ProductDetailModule { }
