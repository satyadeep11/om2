import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router} from '@angular/router';
import {VERSION} from '@angular/material';
declare var require: any;

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  searchText:any;

  constructor( public router: Router) { }

  ngOnInit() {
  }
  Search(searchText){
    this.router.navigate(['/products/search/',searchText]);
  }
  version = VERSION;
  navItems  = require('../../../assets/menu.json');
  
}

