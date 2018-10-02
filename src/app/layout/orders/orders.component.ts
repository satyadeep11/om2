import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../../router.animations';
import { OrdersService } from '../orders.service'; 

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
  animations: [routerTransition()]
})
export class OrdersComponent implements OnInit {

  constructor(public router: Router,
    private orderService: OrdersService) { }
    myData:any;

  ngOnInit() {

    this.orderService.getOrders()
     .subscribe(orders => {
       // show an alert to tell the user if user was invited
       console.log(orders);
       this.myData = orders; 
    },
    error => console.log(error)
   );

  }

}
