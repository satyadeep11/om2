import { Component, OnInit } from '@angular/core';
import { ProductDetailService } from '../product-detail.service'; 
import { OrdersService } from '../../layout/orders.service'; 
@Component({
  selector: 'app-customer-orders',
  templateUrl: './customer-orders.component.html',
  styleUrls: ['./customer-orders.component.scss']
})
export class CustomerOrdersComponent implements OnInit {
  myData:any;
  singleOrder:any;
  user:Cart={};
  viewCheck=false;
  orderNumber=0;

  constructor(private productDetailService: ProductDetailService,
    private orderService: OrdersService) { }

  ngOnInit() {
    this.user.uuid=localStorage.getItem("uuid").toString();
    this.productDetailService.getCustomerOrdersList(this.user).subscribe(user => {
      this.myData = user; 
      console.log(this.myData);      
    },
    error => console.log(error)
    );    
  }  

  ViewOrder(selectionid,status){
    this.orderNumber=selectionid;
    let orderid:OrderId={};
    orderid.selectionid=selectionid; 
    orderid.status=status;

    this.orderService.getOrder(orderid)
      .subscribe(order => {    
        this.singleOrder=order;
        console.log(order);
        this.viewCheck=true;
    },
    error => console.log(error)
    );
  }

}

export interface Cart {
  uuid?:string;
}
export interface OrderId {  
  selectionid?:number; 
  status?:number; 
}
