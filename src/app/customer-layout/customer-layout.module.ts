import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { CustomerLayoutRoutingModule } from './customer-layout-routing.module';
import { CustomerLayoutComponent } from './customer-layout.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './menu/menu.component';

import { MatInputModule, MatButtonModule,MatMenuModule, MatIconModule, MatToolbarModule, MatCardModule } from '@angular/material';
import { MenuItemComponent } from './menu/menu-item/menu-item.component';



@NgModule({
  imports: [
    CommonModule,
    CustomerLayoutRoutingModule,
    TranslateModule,
    MatInputModule,
        MatButtonModule,
        MatMenuModule, 
        MatIconModule,
        MatToolbarModule, 
        MatCardModule,
    NgbDropdownModule.forRoot()
  ],
  declarations: [CustomerLayoutComponent, HeaderComponent, MenuComponent, MenuItemComponent]
})
export class CustomerLayoutModule { }
