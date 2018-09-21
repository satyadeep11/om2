import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { ProductDetailService } from '../product-detail.service'; 
import {GlobalCart} from '../globalcart';

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
  public products_per_page=90;
  visitedproducts="";

  constructor(private route: ActivatedRoute,private productDetailService: ProductDetailService,private router: Router,public gc: GlobalCart) {
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
      //console.log(this.id);
      
    });
    if(this.id && this.id.catid!=0){
      console.log(this.id);
        this.productDetailService.category_product(this.id)
            .subscribe(user => {
              this.myData = user;  
              //console.log(this.myData);     
              //get the product list for this category
                        var self=this;
                        self.gc.productlist.length=0;
                        self.gc.productlist.push(+this.id.catid);
                        if(this.myData.products){
                        this.myData.products.forEach(function (value) {
                          self.gc.productlist.push(+value.product.ProductID);
                          });
                        }
                        //console.log(this.gc.productlist);   
                        // localStorage.setItem('productList', JSON.stringify(this.gc.productlist)); 
                          
            },
            error => console.log(error)
          );
        }
        else {
          this.productDetailService.category_product_all()
            .subscribe(user => {
              this.myData = user;  
              //console.log(this.myData);  
              //get the product list for this category
                        var self=this;
                        self.gc.productlist.length=0;
                        self.gc.productlist.push('');
                        this.myData.products.forEach(function (value) {
                          self.gc.productlist.push(+value.product.ProductID);
                          });
                        //console.log(this.gc.productlist);       
            },
            error => console.log(error)
          );
        }
if(localStorage.getItem("visitedproducts") ){this.visitedproducts=localStorage.getItem("visitedproducts"); }
         
  }

  ngOnInit() {
    // console.log(this.myData);
     //console.log(this.gc.menuitems);
  }
  
}

export interface CatId {  
  catid ?: number;
}