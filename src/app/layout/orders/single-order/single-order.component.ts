import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { OrdersService } from '../../orders.service'; 
import { ProductDetailService } from '../../../customer-layout/product-detail.service'; 
import {Router} from "@angular/router";

@Component({
  selector: 'app-single-order',
  templateUrl: './single-order.component.html',
  styleUrls: ['./single-order.component.scss']
})
export class SingleOrderComponent implements OnInit {

  myData:any;

  @Input() newCart;
  @Input() fullCart;
 
  @Output() editCheckChange = new EventEmitter<boolean>();
  @Output() saveCheckChange = new EventEmitter<number>();
  
  
  Close(){     
      this.editCheckChange.emit(false);
    }
  Save(selectionid){     
    this.saveCheckChange.emit(selectionid);    
    this.myData=undefined;        
  }

  Remove(PId,SelectionId){
    let selectiondetails:Cart={};
    selectiondetails.productid=PId;    
    selectiondetails.selectionid=SelectionId;   
    selectiondetails.status=1;
    this.productDetailService.deleteProduct(selectiondetails).subscribe(user => {
      console.log(user);
      this.newCart=undefined;
      this.Save(SelectionId)
    },
    error => console.log(error)
    );
  }

  constructor(private orderService: OrdersService,private router: Router,
    private productDetailService: ProductDetailService) { 
      
        this.router.routeReuseStrategy.shouldReuseRoute = function() {
          return false;
      };   
   }

  ngOnInit() {
    
  }

  EditProduct(PId) {
    let colorSet:ColorSet={};
    colorSet.productid=PId;
    this.orderService.getColors(colorSet)
      .subscribe(colors => {
        // show an alert to tell the user if user was invited
       this.myData=colors;
       console.log(colors);
    },
    error => console.log(error)
    ); 
  }

  AddRemove(PId,ColorCode,ColorName,SelectionId,Price,PName,Image,event) {//event gets the checkbox checked or not value
    let selectiondetails:Cart={};
    selectiondetails.productid=PId;     
    selectiondetails.colorcodes=[ColorCode];
    selectiondetails.colors=[ColorName];
    selectiondetails.selectionid=SelectionId;
    selectiondetails.price=Price;
    selectiondetails.name=PName;
    selectiondetails.image=[Image];
    selectiondetails.status=1;

    if ( event.target.checked ) {
    
      //this.openSnackBar('Color '+ color +' added to Selection','','green-snackbar'); 
      this.productDetailService.addToCart(selectiondetails).subscribe(user => {
        //console.log(user);
        this.myData.error = user.error;
      },
      error => console.log(error)
      );
    } 
    else {
      console.log(selectiondetails);   
      this.productDetailService.deleteFromCart(selectiondetails).subscribe(user => {
        this.myData.error = user.error;  
        console.log(user)
        },
        error => console.log(error)
      );
    }
}

}

export interface ColorSet {     
  productid?:number;  
}

export interface Cart {  
  productid ?: number;
  uuid?:string;
  name?:string;
  colors?:Array<String>;
  colorcodes?:Array<Number>;
  image?:Array<String>;
  error?:string;
  selectionid?:number;
  price?:number;
  Attr2?: number;
  ProductID?: number;
  status?: number;
  ImageFile?: string;
  A2_Label?: string;  
}