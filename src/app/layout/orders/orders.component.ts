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
    singleOrderData:any;
    newCart:any=[];
    editCheck=false;

  ngOnInit() {
    this.getOrders();
  }

  getSigleOrder(selectionid){
    
    let orderid:OrderId={};
    var colors_container=[];    
    var uniqueproductid:any[][]=[];
    orderid.selectionid=selectionid;   
    this.orderService.getOrder(orderid)
      .subscribe(order => {
        // show an alert to tell the user if user was invited        
        console.log(order);
          this.singleOrderData=order;
          var self=this;
          this.singleOrderData.cartproducts.forEach(function (value) {
            
            uniqueproductid[value.ProductID]=[];
            uniqueproductid[value.ProductID]['Colors']=[];            
            uniqueproductid[value.ProductID]['ProductID']=value.ProductID;
            uniqueproductid[value.ProductID]['ImageFile']=value.ImageFile;
            uniqueproductid[value.ProductID]['Price']=value.Price;
            uniqueproductid[value.ProductID]['ProductName']=value.ProductName; 
            uniqueproductid[value.ProductID]['selectionid']=self.singleOrderData.selection_id;   
            
            self.singleOrderData.cartproducts.forEach(function (value2) {
              if(value2.ProductID==value.ProductID && value2.A2_Label){
                colors_container=(value2.A2_Label);
                uniqueproductid[value.ProductID]['Colors'].push(colors_container);              
              }
            });
          });           
          this.newCart=this.cleanArray(uniqueproductid);      
          this.editCheck=true;     
          console.log(this.newCart,'here');
          if(this.newCart.length==0){
            this.getOrders();
            this.editCheck=false;
          }
    },
    error => console.log(error)
    );    
  }

  cleanArray(actual) {
    var newArray = new Array();
    for (var i = 0; i < actual.length; i++) {
      if (actual[i]) {
        newArray.push(actual[i]);
      }
    }
    return newArray;
  }

  editCheckChangeHandler(editCheck) {
    this.editCheck = editCheck;
  }

  saveCheckChangeHandler(selectionid) {
    this.getSigleOrder(selectionid);
  }

  getOrders(){
    var self=this;
    this.orderService.getOrders()   
    .subscribe(orders => {
      // show an alert to tell the user if user was invited
      console.log(orders);
      self.myData = orders; 
   },
   error => console.log(error)
  );
  }

}

export interface OrderId {  
  selectionid?:number;  
}