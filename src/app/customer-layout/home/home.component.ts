import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import {GenieComponent} from "./genie/genie.component";
import { ProductDetailService } from '../product-detail.service'; 
import {MatDialog} from "@angular/material";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [routerTransition()]
})
export class HomeComponent implements OnInit {
  public id: any;
  myData:any;
  public url="url(https://www.afhsgear.com/sites/998/products/998_";
  public url_close=")";

  constructor(private productDetailService: ProductDetailService,public dialog : MatDialog) {
    if(!localStorage.getItem("CatListFull")){
        this.dialog.open(GenieComponent, {
        width: '500px',
        data: {}
      });
    }
    

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

} 
