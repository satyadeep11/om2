import { Component, OnInit } from '@angular/core';
import {GlobalCart} from '../globalcart';
import { ProductDetailService } from '../product-detail.service'; 
import { AuthService } from '../../auth.service';

import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  productList:any;
 
  newCart:any=[];
  
  constructor(public gc: GlobalCart,
    private authService: AuthService,
    public snackBar: MatSnackBar,
    private productDetailService: ProductDetailService) { 
    var retrievedData = localStorage.getItem("currentCart");        
    this.productList= JSON.parse(retrievedData); 
    var colors_container=[];
    
    var uniqueproductid:any[][]=[];

        if(this.productList){
          var self=this;
          this.productList.cartproducts.forEach(function (value) {
            
            uniqueproductid[value.ProductID]=[];
            uniqueproductid[value.ProductID]['Colors']=[];            
            uniqueproductid[value.ProductID]['ProductID']=value.ProductID;
            uniqueproductid[value.ProductID]['ImageFile']=value.ImageFile;
            uniqueproductid[value.ProductID]['Price']=value.Price;
            uniqueproductid[value.ProductID]['ProductName']=value.ProductName;    
            
            self.productList.cartproducts.forEach(function (value2) {
              if(value2.ProductID==value.ProductID && value2.A2_Label){
                colors_container=(value2.A2_Label);
                uniqueproductid[value.ProductID]['Colors'].push(colors_container);              
              }
            });
          });           
          this.newCart=this.cleanArray(uniqueproductid); 
        }
  }

  ngOnInit() {
    console.log(this.productList);
    console.log(this.newCart);
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

  DeleteProduct(ProductID,ProductName) {

    let productdetails:PID={};
    productdetails.selectionid=this.productList.selection_id;
    productdetails.productid=ProductID;

    this.productDetailService.deleteProduct(productdetails).subscribe(user => {
      //console.log(user);
      // this.myData.error = user.error;  
      this.GetCart();
    },
    error => console.log(error)
    );

    this.newCart.forEach( (item, index) => {
      if(item.ProductID == ProductID) this.newCart.splice(index,1);
    });

    this.openSnackBar(ProductName+' removed from selection.','OK');    
    
  }

  openSnackBar(msg,action)  {
    this.snackBar.open(msg,action, {
      duration: 2500,
    });
  }

  SubmitCart() {

    if(this.gc.count==0){
      this.openSnackBar('No Products Selected '+ '','OK');      
    }
    else {
        let cartdetails:CID={};
        cartdetails.selectionid=this.productList.selection_id;
        cartdetails.uuid=localStorage.getItem("uuid").toString();
        this.productDetailService.SubmitCart(cartdetails).subscribe(user => {
          //console.log(user);
          // this.myData.error = user.error;  
          this.GetCart();
        },
        error => console.log(error)
        );
      }
  }


  GetCart() {    
    let user:Cart={};
    user.uuid=localStorage.getItem("uuid").toString();
    this.authService.getCart(user).subscribe(user => {        
      localStorage.setItem('currentCart', JSON.stringify(user)); 
      this.gcUpdate(); 
    },
    error => console.log(error)
    );  
  }

  gcUpdate() {
    var retrievedData = localStorage.getItem("currentCart");        
    var cartdetails = JSON.parse(retrievedData); 
    var uniqueproductid=[];
    cartdetails.cartproducts.forEach(function (value) {
      uniqueproductid.push(value.ProductID);
    }); 
    var unique = uniqueproductid.filter(function(elem, index, self) {
      return index === self.indexOf(elem);
    })
    this.gc.count=unique.length;
  }

  

}

export interface PID {  
  productid ?: number; 
  selectionid?:number;
}

export interface CID {  
  uuid ?: string; 
  selectionid?:number;
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
  ImageFile?: string;
  A2_Label?: string;
  
}
