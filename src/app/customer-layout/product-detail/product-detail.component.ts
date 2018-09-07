import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductDetailService } from '../product-detail.service'; 
import {MatSnackBar} from '@angular/material';

import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  
  //variables
  id:PriceId={};
  private sub: any;
  myData:any;
  colorset:ColorSet[]=[];

//variables end

  constructor(private route: ActivatedRoute,private productDetailService: ProductDetailService,public snackBar: MatSnackBar,config: NgbCarouselConfig) { 
    config.showNavigationIndicators = false;
  }

  ngOnInit() { 
    this.sub = this.route.params.subscribe(params => {
      this.id.productid = +params['id']; // (+) converts string 'id' to a number
    });

    this.productDetailService.product_detail(this.id)
    .subscribe(user => {
      this.myData = user; 
      console.log(this.myData ); 
      this.updateImage(this.myData.variants[0].ProductID, this.myData.variants[0].ImageFile,'product-img');
    },
    error => console.log(error)
  );

  }

  openSnackBar(msg,action) {
    this.snackBar.open(msg,action, {
      duration: 1500,
    });
  }

  colorselect(color,colorcode) {
    var inputElement = <HTMLInputElement>document.getElementsByClassName(colorcode)[0];
    if(this.colorset.includes(color)){
      inputElement.style.border="1px solid #000000";
      this.openSnackBar('Color '+ color,'Removed'); 
      delete this.colorset[colorcode];    
     // console.log(this.colorset);
      console.log(Object.keys(this.colorset));
      console.log(Object.values(this.colorset));
    }
    else{  
      inputElement.style.border="thick solid green";
      this.openSnackBar('Color '+ color,'Added'); 
      this.colorset[colorcode]=color;
      //this.colorset.push(color);
      //console.log(this.colorset);
      console.log(Object.keys(this.colorset));
      console.log(Object.values(this.colorset));
    }
  }

  public updateImage(product,image,imageid){
    if(image){
      var inputElement = <HTMLInputElement>document.getElementById(imageid);
      if(document.getElementById(imageid)){
        var url="https://www.afhsgear.com/sites/998/products/998_";
        inputElement.style.backgroundImage = 'url('+url+ product +'_'+ image + ')';
      }
    }
  }


}

// export interface SingleProduct {  
//   ProductID:number;
//   SiteID:number;
//   ProductName:string;
//   ProductBaseSKU: string;
//   ProductDesc1: string;
//   PricingID:number;
//   SKU:string;
//   Attr1:number;
//   Attr2:number;
//   QtyMin:number;
//   QtyMax:number;
//   ImageID:number;
//   ImageFile:string;
//   Available:number;
//   Price:string;
//   DefaultPrice:string;
//   A1_Label:string;
//   A1_Short:string;
//   A2_Label:string;
//   A2_Short:string;
// }

export interface PriceId {  
  productid ?: number;
}

export interface ColorSet {  
  color ?: String;
  colorset ?: number;
}
