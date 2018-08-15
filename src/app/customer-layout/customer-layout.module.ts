import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { CustomerLayoutRoutingModule } from './customer-layout-routing.module';
import { CustomerLayoutComponent } from './customer-layout.component';
import { HeaderComponent } from './componenets/header/header.component';


@NgModule({
  imports: [
    CommonModule,
    CustomerLayoutRoutingModule,
    TranslateModule,
    NgbDropdownModule.forRoot()
  ],
  declarations: [CustomerLayoutComponent, HeaderComponent]
})
export class CustomerLayoutModule { }
