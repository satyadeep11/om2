import { Component, OnInit,Input,ViewChild,Output,EventEmitter } from '@angular/core';
import {MatSelect} from '@angular/material';
import { MatStepper } from '@angular/material';
import {MatSnackBar} from '@angular/material';
import { OrdersService } from '../../orders.service'; 
import { ProductDetailService } from '../../../customer-layout/product-detail.service'; 

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  myData:any;
  searchText='';
  selectedProduct:any;

  @Input() allProducts;
  @Input() selectionid;
  @ViewChild(MatSelect) mySelector: MatSelect;

  @Output() addCheckChange = new EventEmitter<boolean>();
  @Output() saveAddChange = new EventEmitter<number>();
  constructor(public snackBar: MatSnackBar,private orderService: OrdersService,private productDetailService: ProductDetailService) { }

  ngOnInit() {       
  }
  Close(){     
    this.addCheckChange.emit(false);
  }
  Save(){     
    this.saveAddChange.emit(this.selectionid);    
    this.myData=undefined;   
    this.Close();     
  }
  openSelector() {
    this.mySelector.open();//to open select on input click/change
 }
 CheckSelection(stepper: MatStepper,PId) {
   
  if(this.selectedProduct!=undefined && this.selectedProduct.length>1){

    let colorSet:ColorSet={};
    colorSet.productid=PId;
    this.orderService.getColors(colorSet)
      .subscribe(colors => {
        // show an alert to tell the user if user was invited
       this.myData=colors;
       console.log(colors);
       stepper.next();
    },
    error => console.log(error)
    );     
  }
  else{
    this.openSnackBar('No Product Selected','OK','red-snackbar');
  }

}
openSnackBar(msg,action,className)  {
  this.snackBar.open(msg,action, {
    duration: 2500,
    panelClass: [className]
  });
}


getThumb(imagename){
  return imagename.replace(".jpg", "_200.jpg");
}  

getThumb60(imagename){
  return imagename.replace(".jpg", "_60.jpg");
} 

AddRemove(PId,ColorCode,ColorName,Price,PName,Image,event) {//event gets the checkbox checked or not value
  let selectiondetails:Cart={};
  selectiondetails.productid=PId;     
  selectiondetails.colorcodes=[ColorCode];
  selectiondetails.colors=[ColorName];
  selectiondetails.selectionid=this.selectionid;
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
