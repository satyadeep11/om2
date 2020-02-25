import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import {GenieComponent} from "./genie/genie.component";
import { ProductDetailService } from '../product-detail.service'; 
import {MatDialog} from "@angular/material";
import {GlobalCart} from '../globalcart';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [routerTransition()]
})
export class HomeComponent implements OnInit {
  public id: any;
  myData:any;
  public url="url(https://securedgear.com/sites/998/products/998_";
  public url_close=")";  

  constructor(private productDetailService: ProductDetailService,private gc: GlobalCart,public dialog : MatDialog) {
    // if(!localStorage.getItem("CatListFull")){
    //     this.dialog.open(GenieComponent, {
    //     width: '500px',
    //     data: {}
    //   });
    // }
    this.productDetailService.category_all().subscribe(user => {
      this.myData = user; 
      console.log(this.myData);   
      gc.CatListFull=[];
      this.myData.cats.forEach(function (value) {
        if(+value.CategoryParent!=0){
          gc.CatListFull.push(+value.CategoryID); 
          localStorage.setItem('CatListFull',JSON.stringify(gc.CatListFull));         
        }
      }); 
         console.log(gc.CatListFull);
    },
    error => console.log(error)
    );

    this.productDetailService.new_products().subscribe(user => {
      this.myData = user; 
      console.log(this.myData);      
    },
    error => console.log(error)
    );
    
    
  }

  ngOnInit() {
    
  }

getMain(imagename){
  if(imagename)
    return imagename.replace(".jpg", "_600.jpg");
}  
LoadGenie(){
  this.dialog.open(GenieComponent, {
    width: '500px',
    data: {}
  });
}

} 
