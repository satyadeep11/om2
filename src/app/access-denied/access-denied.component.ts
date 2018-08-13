import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';

@Component({
  selector: 'app-access-denied',
  templateUrl: './access-denied.component.html',
  styleUrls: ['./access-denied.component.scss'],
  animations: [routerTransition()]
})
export class AccessDeniedComponent implements OnInit {
  constructor(public router: Router) {}

  

  ngOnInit() {
  }

}
