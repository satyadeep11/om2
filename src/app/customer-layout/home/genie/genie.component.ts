import { Component, OnInit } from '@angular/core';
import { ProductDetailService } from '../../product-detail.service'; 
import {GlobalCart} from '../../globalcart';
import {Router} from "@angular/router";

@Component({
  selector: 'app-genie',
  templateUrl: './genie.component.html',
  styleUrls: ['./genie.component.scss']
})
export class GenieComponent implements OnInit {
isLinear = true;
myData:any;
catList=[];
  constructor(private productDetailService: ProductDetailService,private gc: GlobalCart,private router: Router) { 

    this.productDetailService.category_all().subscribe(user => {
      this.myData = user; 
      console.log(this.myData);      
    },
    error => console.log(error)
    );
  }

  ngOnInit() {
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
  var self=this;
  this.productDetailService.update_category(cartList).subscribe(user => {
    if(!user.error) {
      self.productDetailService.get_category_products(cartList).subscribe(user => {   
        self.gc.productlist=user.products;
        console.log(self.gc.productlist);
        if(self.gc.productlist)  {
        self.gc.productlist=self.gc.productlist.map(function(v){return +v});
        this.router.navigate(['/product-detail',self.gc.productlist[0]]);  
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
Reset() {
  let elements = document.getElementsByTagName('input');
      for (let i = 0; i < elements.length; i++) {
        if (elements[i].type == 'checkbox') {
          elements[i].checked = false;
        }
      }
      this.catList=[];
}
}

export interface Cart {    
  catid?:string;
  selectionid?:number;   
}
