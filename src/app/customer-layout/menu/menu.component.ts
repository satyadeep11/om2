import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router} from '@angular/router';
import {VERSION} from '@angular/material';
import {GenieComponent} from "../home/genie/genie.component";
import {MatDialog} from "@angular/material";
import {IntroJs} from 'intro.js';

//const IntroJs = require('../../../../node_modules/intro.js');
declare var require: any;

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  searchText:any;
  version = VERSION;
  navItems  = require('../../../assets/menu.json');
  intro:any;

  constructor( public router: Router,public dialog : MatDialog) { }

  ngOnInit() {
    this.intro = IntroJs();
    // Initialize steps
    this.intro.setOptions({
        steps: [
            {
                element: '.step-one',
                intro: "Use this for Genie Selection ",
                position: 'bottom'
            },
            {
                element: '.step-two',
                intro: "Search products here",
                position: 'bottom'
            },
            {
                element: '.step-three',
                intro: 'The menu',
                position: 'bottom'
            }
        ]
    });
    
  }
  ngAfterViewInit() {
    if(!localStorage.getItem('HomeVisit')) {
      this.intro.start();
      localStorage.setItem('HomeVisit', 'Yes');
    }
  }
  OpenTour(){
    this.intro.start();
  }
  Search(searchText){
    if(searchText)
    this.router.navigate(['/products/search/',searchText]);
  }

  LoadGenie(){
    this.dialog.open(GenieComponent, {
      width: '500px',
      data: {}
    });
  }
  
  
}

