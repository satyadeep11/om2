import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { ProductDetailService } from '../product-detail.service'; 
import {GlobalCart} from '../globalcart';
declare var require: any;

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
  visitedproducts="";
  startprice=0;
  endprice=0;
  brandArray:Brand[]=[];
  genderArray:Gender[]=[];
  colorArray:ColorGroup[]=[];
  sizeArray=[];
  sizeSelected='';
  
  brandFilterArray=[];
  genderFilterArray=[];
  colorFilterArray=[];
  menuitems = require('../../../assets/menu.json');

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
              console.log(this.myData);     
              //get the product list for this category
                        var self=this;
                        self.gc.productlist.length=0;
                        self.gc.productlist.push(+this.id.catid);
                        if(this.myData.products){
                        this.myData.products.forEach(function (value) {
                          self.gc.productlist.push(+value.product.ProductID);
                          self.brandArray.push({name:value.product.Brand,checked:false});
                          self.genderArray.push({name:value.product.Gender,checked:false});
                          self.sizeArray.push(value.sizes);
                          });
                        }
                        if(this.myData.colorgroups){
                          this.myData.colorgroups.forEach(function (value) {
                            self.colorArray.push({colorgroup:value,checked:false});
                            });
                          }                        
                        //console.log(this.gc.productlist);   
                        // localStorage.setItem('productList', JSON.stringify(this.gc.productlist));  
                        this.sizeArray=[].concat.apply([], this.sizeArray);
                        this.sizeArray=this.removeDupesSizes(this.sizeArray);
                        this.brandArray=this.removeDupes(this.brandArray);
                        this.genderArray=this.removeDupes(this.genderArray);
                        // this.brandArray.forEach(function (value){
                        //     self.brandFilterArray.push(value.name);
                        // });                         
            },
            error => console.log(error)
          );
        }
        else {
          this.productDetailService.category_product_all()
            .subscribe(user => {
              this.myData = user;                
              console.log(this.myData);  
              //get the product list for this category
                        var self=this;
                        self.gc.productlist.length=0;
                        self.gc.productlist.push('');
                        if(this.myData.products){
                        this.myData.products.forEach(function (value) {
                          self.gc.productlist.push(+value.product.ProductID);
                          self.brandArray.push({name:value.product.Brand,checked:false});
                          self.genderArray.push({name:value.product.Gender,checked:false});
                          self.sizeArray.push(value.sizes);
                          });      
                        } 
                        if(this.myData.colorgroups){
                          this.myData.colorgroups.forEach(function (value) {
                            self.colorArray.push({colorgroup:value,checked:false});
                            });
                        }         
                        this.sizeArray=[].concat.apply([], this.sizeArray);
                        this.sizeArray=this.removeDupesSizes(this.sizeArray);                        
                        this.brandArray=this.removeDupes(this.brandArray);
                        this.genderArray=this.removeDupes(this.genderArray);
                        // this.brandArray.forEach(function (value){
                        //     self.brandFilterArray.push(value.name);
                        // });
                         console.log(this.colorArray);                                                
            },
            error => console.log(error)
          );
        }
if(localStorage.getItem("visitedproducts") ){this.visitedproducts=localStorage.getItem("visitedproducts"); }
         
  }

ngOnInit() {
 
}

getMain(imagename){
    return imagename.replace(".jpg", "_600.jpg");
}

removeDupes(array){
  var seen = {};
    return array.filter(function(item) {
        return seen.hasOwnProperty(item.name) || item.name==null ? false : (seen[item.name] = true);//remove dupes and nulls
    });
}
removeDupesSizes(array){
  var seen = {};
    return array.filter(function(item) {
        return seen.hasOwnProperty(item.A1_Short) || item.A1_Short==null ? false : (seen[item.A1_Short] = true);//remove dupes and nulls
    });
}

brandCheck(brand,i){  
  if(this.brandArray[i].checked){
    this.brandFilterArray.splice( this.brandFilterArray.indexOf(brand.name), 1 );    
    console.log(this.brandFilterArray);
    this.brandArray[i].checked=false;
  }else{    
    this.brandFilterArray.push(brand.name);
    console.log(this.brandFilterArray);
    this.brandArray[i].checked=true;
  }  
}

colorCheck(color,i){  
  color=','+color+',';//for search
  console.log(color);
  if(this.colorArray[i].checked){
    this.colorFilterArray.splice( this.colorFilterArray.indexOf(color), 1 );    
    console.log(this.colorFilterArray);
    this.colorArray[i].checked=false;
  }else{    
    this.colorFilterArray.push(color);
    console.log(this.colorFilterArray);
    this.colorArray[i].checked=true;
  }  
} 

genderCheck(gender,i){  
  if(this.genderArray[i].checked){
    this.genderFilterArray.splice( this.genderFilterArray.indexOf(gender.name), 1 );    
    console.log(this.genderFilterArray);
    this.genderArray[i].checked=false;
  }else{    
    this.genderFilterArray.push(gender.name);
    console.log(this.genderFilterArray);
    this.genderArray[i].checked=true;
  }  
} 
}


export interface CatId {  
  catid ?: number;
}

export interface Brand{  
  name ?: string;
  checked?: boolean;
}

export interface Gender{  
  name ?: string;
  checked?: boolean;
}
export interface ColorGroup{  
  colorgroup ?: any;
  checked?: boolean;
}