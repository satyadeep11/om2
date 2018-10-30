import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-layout',
  templateUrl: './customer-layout.component.html',
  styleUrls: ['./customer-layout.component.scss']
})
export class CustomerLayoutComponent implements OnInit {

  collapedSideBar: boolean;
  constructor() { }

  ngOnInit() {
  }

  receiveCollapsed($event) {
    this.collapedSideBar = $event;
}

}
