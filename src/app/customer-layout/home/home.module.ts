import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import {MatDialogModule,MatCardModule} from '@angular/material';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

import { StatModule } from '../../shared';


@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),
        HomeRoutingModule,
        MatDialogModule,
        MatCardModule,
        StatModule
    ],
    declarations: [
        HomeComponent
    ]
})
export class HomeModule { } 
