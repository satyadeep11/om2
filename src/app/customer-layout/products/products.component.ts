import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
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
  public products_per_page=9;
  visitedproducts="";

  constructor(private route: ActivatedRoute,private productDetailService: ProductDetailService,private router: Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = function() {
      return false;
  };
    this.sub = this.route.params.subscribe(params => {
      if(params['id']){
      this.id.catid = +params['id']; // (+) converts string 'id' to a number
      }
      else{
        this.id.catid = 0;
      }
      console.log(this.id);
      
    });
    if(this.id && this.id.catid!=0){
      console.log(this.id);
        this.productDetailService.category_product(this.id)
            .subscribe(user => {
              this.myData = user;  
              console.log(this.myData);         
            },
            error => console.log(error)
          );
        }
        else {
          this.productDetailService.category_product_all()
            .subscribe(user => {
              this.myData = user;  
              console.log(this.myData);         
            },
            error => console.log(error)
          );
        }

    this.visitedproducts=localStorage.getItem("visitedproducts");      
  }

  ngOnInit() {
    
  }
  
}

export interface CatId {  
  catid ?: number;
}