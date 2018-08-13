import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms'; 
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import { InviteRoutingModule } from './invite-routing.module';
import { InviteComponent } from './invite.component';
import { PageHeaderModule } from '../../shared';



@NgModule({
  imports: [CommonModule, FormsModule,
    ReactiveFormsModule,    
    NgbCarouselModule.forRoot(),
    NgbAlertModule.forRoot(),
    InviteRoutingModule, PageHeaderModule],
    declarations: [InviteComponent]
  
})
export class InviteModule { } 
