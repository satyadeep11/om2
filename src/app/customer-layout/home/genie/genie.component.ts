import { Component,Inject } from '@angular/core';
import { ProductDetailService } from '../../product-detail.service'; 
import {GlobalCart} from '../../globalcart';
import {Router} from "@angular/router";

import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-genie',
  templateUrl: './genie.component.html',
  styleUrls: ['./genie.component.scss']
})
export class GenieComponent {
isLinear = true;
myData:any;
catList=[];
  constructor(private dialogRef: MatDialogRef<GenieComponent>, @Inject(MAT_DIALOG_DATA) public data : any,
  private productDetailService: ProductDetailService,private gc: GlobalCart,private router: Router) { 

    this.productDetailService.category_all().subscribe(user => {
      this.myData = user; 
      console.log(this.myData);      
    },
    error => console.log(error)
    );
  }


AddRemoveCat(event,value){
  if ( event.target.checked ){
    this.catList.push(value);
    console.log(this.catList);
  }
  else{    
    this.catList.splice( this.catList.indexOf(value), 1 );
    console.log(this.catList);
  }
}

SaveCat(){
  var cartList:Cart={};
  cartList.selectionid=(+localStorage.getItem("selection_id"));
  cartList.catid=this.catList.join(", ");
  if(cartList.catid!=undefined && cartList.catid.length>0){  
  var self=this;
  this.productDetailService.update_category(cartList).subscribe(user => {
    if(!user.error) {
      self.productDetailService.get_category_products(cartList).subscribe(user => {   
        self.gc.productlist=user.products;
        console.log(self.gc.productlist);
        if(self.gc.productlist)  {
        self.gc.productlist=self.gc.productlist.map(function(v){return +v});
        localStorage.setItem('productList',JSON.stringify(self.gc.productlist)); 
        this.router.navigate(['/product-detail',self.gc.productlist[0]]);  
        this.dialogRef.close();
        }
        else{
          alert('No products found in Selected Categories');
        }
      },
      error => console.log(error)
      );
    }
  
         
  },
  error => console.log(error)
  );
  }
  else{
    alert('No categoires were selected');
  }
}
Reset() {
  let elements = document.getElementsByTagName('input');
      for (let i = 0; i < elements.length; i++) {
        if (elements[i].type == 'checkbox') {
          elements[i].checked = false;
        }
      }
      this.catList=[];
}

public closeDialog(){
  this.dialogRef.close();
}

}

export interface Cart {    
  catid?:string;
  selectionid?:number;   
}
