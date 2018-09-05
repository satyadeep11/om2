import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductDetailService } from '../product-detail.service'; 

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  id:CatId={};
  private sub: any;
  myData:any;
  public url="url(https://www.afhsgear.com/sites/998/products/998_";
  public url_close=")";
  constructor(private route: ActivatedRoute,private productDetailService: ProductDetailService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id.catid = +params['id']; // (+) converts string 'id' to a number
      console.log(this.id.catid);
    });
    
    this.productDetailService.category_product(this.id)
        .subscribe(user => {
          this.myData = user;  
          console.log(this.myData.products[0]);         
        },
        error => console.log(error)
      );
  }
  
}

export interface CatId {  
  catid ?: number;
}