import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router} from '@angular/router';
import {VERSION} from '@angular/material';
import {GenieComponent} from "../home/genie/genie.component";
import {MatDialog} from "@angular/material";
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

  constructor( public router: Router,public dialog : MatDialog) { }

  ngOnInit() {
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

