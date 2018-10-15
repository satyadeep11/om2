import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import {MatDialogModule,MatCardModule} from '@angular/material';

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
        MatDialogModule,
        MatCardModule,
        StatModule
    ],
    declarations: [
        HomeComponent,
        GenieComponent
    ],
    entryComponents: [
        GenieComponent
    ]
})
export class HomeModule { } 
