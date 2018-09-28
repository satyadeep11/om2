import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { ProductsRoutingModule } from './products-routing.module';
import { GenderFilterPipe} from '../genderfilter.pipe';
import { PriceFilterPipe} from '../pricefilter.pipe';
import { BrandFilterPipe} from '../brandfilter.pipe';
import { SizeFilterPipe} from '../sizefilter.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ProductsRoutingModule, FormsModule
  ],
  declarations: [ProductsComponent, GenderFilterPipe,PriceFilterPipe,BrandFilterPipe,SizeFilterPipe]
})
export class ProductsModule { }
