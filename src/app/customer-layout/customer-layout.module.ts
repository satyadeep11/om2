import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { CustomerLayoutRoutingModule } from './customer-layout-routing.module';
import { CustomerLayoutComponent } from './customer-layout.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './menu/menu.component';

import { MatInputModule, MatButtonModule,MatMenuModule, MatIconModule, MatCardModule } from '@angular/material';



@NgModule({
  imports: [
    CommonModule,
    CustomerLayoutRoutingModule,
    TranslateModule,
    MatInputModule,
        MatButtonModule,
        MatMenuModule, 
        MatIconModule, 
        MatCardModule,
    NgbDropdownModule.forRoot()
  ],
  declarations: [CustomerLayoutComponent, HeaderComponent, MenuComponent]
})
export class CustomerLayoutModule { }
