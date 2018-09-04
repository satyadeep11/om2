import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductDetailService } from '../product-detail.service'; 


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  id:PriceId={};
  private sub: any;
  myData:any;
  constructor(private route: ActivatedRoute,private productDetailService: ProductDetailService) { }

  ngOnInit() {

    this.sub = this.route.params.subscribe(params => {
      this.id.pricingid = +params['id']; // (+) converts string 'id' to a number
      //console.log(this.id);
      //  action to load the product details here.
   });
   console.log(this.id);
   this.productDetailService.product_detail(this.id)
   .subscribe(user => {
     // show an alert to tell the user if user was invited
     
     this.myData = user; 
     console.log(this.myData);
  },
  error => console.log(error)
 );
}

}

export interface SingleProduct {  
  ProductID:number;
  SiteID:number;
  ProductName:string;
  ProductBaseSKU: string;
  ProductDesc1: string;
  PricingID:number;
  SKU:string;
  Attr1:number;
  Attr2:number;
  QtyMin:number;
  QtyMax:number;
  ImageID:number;
  ImageFile:string;
  Available:number;
  Price:string;
  DefaultPrice:string;
  A1_Label:string;
  A1_Short:string;
  A2_Label:string;
  A2_Short:string;
}

export interface PriceId {  
  pricingid ?: number;
}
