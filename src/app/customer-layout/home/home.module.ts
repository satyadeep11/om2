import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

import { StatModule } from '../../shared';
import { GenieComponent } from './genie/genie.component';
import {MatStepperModule} from '@angular/material/stepper';


@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),
        HomeRoutingModule,
        MatStepperModule,
        StatModule
    ],
    declarations: [
        HomeComponent,
        GenieComponent
    ]
})
export class HomeModule { } 
