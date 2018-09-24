import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
 

import { CustomerLayoutRoutingModule } from './customer-layout-routing.module';
import { CustomerLayoutComponent } from './customer-layout.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './menu/menu.component';

import { MatInputModule, MatButtonModule,MatMenuModule, MatIconModule, MatToolbarModule, MatCardModule } from '@angular/material';
import { MenuItemComponent } from './menu/menu-item/menu-item.component';
import { FooterComponent } from './components/footer/footer.component';
import { GlobalCart } from './globalcart';
import {NgxPaginationModule} from 'ngx-pagination'; 



@NgModule({
  imports: [
    CommonModule,
    CustomerLayoutRoutingModule,
    TranslateModule,
    NgxPaginationModule,
    MatInputModule,
        MatButtonModule,
        MatMenuModule, 
        MatIconModule,
        MatToolbarModule, 
        MatCardModule,
        NgbModule.forRoot()
  ],
  declarations: [CustomerLayoutComponent, HeaderComponent, MenuComponent, MenuItemComponent, FooterComponent],
  providers: [ GlobalCart ]
})
export class CustomerLayoutModule { }
