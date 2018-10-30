import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
 

import { CustomerLayoutRoutingModule } from './customer-layout-routing.module';
import { CustomerLayoutComponent } from './customer-layout.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './menu/menu.component';

import { MatInputModule,MatDialogModule, MatButtonModule,MatMenuModule, MatIconModule, MatToolbarModule, MatCardModule } from '@angular/material';
import { MenuItemComponent } from './menu/menu-item/menu-item.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GlobalCart } from './globalcart';
import {NgxPaginationModule} from 'ngx-pagination'; 
import { GenieComponent } from './home/genie/genie.component';

import {MatStepperModule} from '@angular/material/stepper';
import { SidebarComponent } from './components/sidebar/sidebar.component';



@NgModule({
  imports: [
    CommonModule,
    CustomerLayoutRoutingModule,
    TranslateModule,
    NgxPaginationModule,
    MatStepperModule,
    FormsModule, ReactiveFormsModule,
    MatInputModule,MatDialogModule,
        MatButtonModule,
        MatMenuModule, 
        MatIconModule,
        MatToolbarModule, 
        MatCardModule,
        NgbModule.forRoot()
  ],
  declarations: [CustomerLayoutComponent, HeaderComponent, MenuComponent, MenuItemComponent, FooterComponent, GenieComponent, SidebarComponent],
  providers: [ GlobalCart ]
  ,
    entryComponents: [
        GenieComponent
    ]
})
export class CustomerLayoutModule { }
