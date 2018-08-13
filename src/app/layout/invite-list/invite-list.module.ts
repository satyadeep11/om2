import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms'; 
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import { InviteListRoutingModule } from './invite-list-routing.module';
import { InviteListComponent } from './invite-list.component';
import { PageHeaderModule } from '../../shared';

@NgModule({
  imports: [CommonModule, FormsModule,
    ReactiveFormsModule,    
    NgbCarouselModule.forRoot(),
    NgbAlertModule.forRoot(),
    InviteListRoutingModule, PageHeaderModule],
  declarations: [InviteListComponent]
})
export class InviteListModule { }
