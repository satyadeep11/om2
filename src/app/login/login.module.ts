import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms'; 
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';



@NgModule({
    imports: [CommonModule, FormsModule,    
    NgbCarouselModule.forRoot(),
    NgbAlertModule.forRoot(),
    ReactiveFormsModule,LoginRoutingModule],
    declarations: [LoginComponent, ForgotPasswordComponent]
})
export class LoginModule {} 
