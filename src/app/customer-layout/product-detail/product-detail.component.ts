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
      this.id.productid = +params['id']; // (+) converts string 'id' to a number
   });
   console.log(this.id);
   this.productDetailService.product_detail(this.id)
      .subscribe(user => {
        // show an alert to tell the user if user was invited
        this.myData = user; 
        console.log(this.myData.variants[0].ImageFile);
        var i=0;
        while(this.myData.variants[i].ImageFile==null){
          console.log(this.myData.variants[i].ImageFile);
          i++;
          this.updateImage(this.myData.variants[i].ProductID, this.myData.variants[i].ImageFile,'product-img');
          this.updateImage(this.myData.variants[i+1].ProductID, this.myData.variants[i+1].ImageFile,'thumb-img-1');
          this.updateImage(this.myData.variants[i+2].ProductID, this.myData.variants[i+2].ImageFile,'thumb-img-2');
          this.updateImage(this.myData.variants[i+3].ProductID, this.myData.variants[i+3].ImageFile,'thumb-img-3');
        }

      },
      error => console.log(error)
    );

    

}


updateImage(product,image,imageid){
  if(image){
  var inputElement = <HTMLInputElement>document.getElementById(imageid);
  inputElement.style.backgroundImage = 'url(https://www.afhsgear.com/sites/998/products/998_'+ product +'_'+ image + ')';
  }
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
  productid ?: number;
}
