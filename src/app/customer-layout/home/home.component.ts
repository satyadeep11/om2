import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

import { ProductDetailService } from '../product-detail.service'; 

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

  constructor(private productDetailService: ProductDetailService) { 
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
    return imagename.replace(".jpg", "_600.jpg");
}  

} 
