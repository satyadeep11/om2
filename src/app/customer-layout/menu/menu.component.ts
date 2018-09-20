import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router} from '@angular/router';
import {VERSION} from '@angular/material';
import {GlobalCart} from '../globalcart';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor( public router: Router,public gc: GlobalCart) { }

  ngOnInit() {
  }
  version = VERSION;
  navItems  = this.gc.menuitems;

}

