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
  panelOpenState = false;
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
  searchText:any='';
  secondsize=[];
  
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
      
      if(params['search']){
        this.searchText=params['search'];
    }
      
    });
    if(this.id && this.id.catid!=0){
      this.id.sglist=localStorage.getItem("securityGroup");
      console.log(this.id);
        this.productDetailService.category_product(this.id)
            .subscribe(user => {
              this.myData = user;  
              console.log(this.myData);     
              //get the product list for this category
                        var self=this;
                        self.gc.productlistcategory.length=0;
                        self.gc.productlistcategory.push(+this.id.catid);
                        if(this.myData.products){
                        this.myData.products.forEach(function (value) {
                          self.gc.productlistcategory.push(+value.ProductID);
                          self.brandArray.push({name:value.Brand,checked:false});
                          self.genderArray.push({name:value.Gender,checked:false});
                          self.sizeArray.push(value.sizes);
                          });
                        }
                        if(this.myData.colorgroups){
                          this.myData.colorgroups.forEach(function (value) {
                            self.colorArray.push({colorgroup:value,checked:false});
                            });
                          }
                          if(this.myData.products){
                            this.myData.products.forEach(function (value) {
                              self.secondsize.push(value.A1_Label);
                              });
                          }                          
                          this.secondsize = this.secondsize.join('').split(',').filter(function(item, pos,self) {
                            if(item.length>0)
                            return self.indexOf(item) == pos;
                          });                        
                        //console.log(this.gc.productlistcategory);   
                        // localStorage.setItem('productlistcategory', JSON.stringify(this.gc.productlistcategory));  
                        //this.sizeArray=[].concat.apply([], this.sizeArray);
                        //this.sizeArray=this.removeDupesSizes(this.sizeArray);
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
          this.id.sglist=localStorage.getItem("securityGroup");
          this.productDetailService.category_product_all(this.id)
            .subscribe(user => {
              this.myData = user;                
              console.log(this.myData);  
              //get the product list for this category
                        
                        var self=this;
                        self.gc.productlistcategory.length=0;
                        self.gc.productlistcategory.push('');
                        if(this.myData.products){
                        this.myData.products.forEach(function (value) {
                          self.gc.productlistcategory.push(+value.ProductID);
                          self.brandArray.push({name:value.Brand,checked:false});
                          self.genderArray.push({name:value.Gender,checked:false});
                          self.sizeArray.push(value.sizes);
                          });      
                        } 
                        if(this.myData.colorgroups){
                          this.myData.colorgroups.forEach(function (value) {
                            self.colorArray.push({colorgroup:value,checked:false});
                            });
                        }     
                        if(this.myData.products){
                          this.myData.products.forEach(function (value) {
                            self.secondsize.push(value.A1_Label);
                            });
                        }                          
                        this.secondsize = this.secondsize.join('').split(',').filter(function(item, pos,self) {
                          if(item.length>0)
                          return self.indexOf(item) == pos;
                        });
                        //this.sizeArray=[].concat.apply([], this.sizeArray);
                        // this.sizeArray=this.removeDupesSizes(this.sizeArray);                        
                        this.brandArray=this.removeDupes(this.brandArray);
                        this.genderArray=this.removeDupes(this.genderArray);
                        // this.brandArray.forEach(function (value){
                        //     self.brandFilterArray.push(value.name);
                        // });
                                                                       
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

NextCat() {
  if(this.gc.CatListFull.length>0){
    if(this.id)
  this.getNextMember(this.gc.CatListFull, this.id.catid,'genie');
  }
  else if(localStorage.getItem("CatListFull")){
    var retrievedData = localStorage.getItem("CatListFull");        
    this.gc.CatListFull= JSON.parse(retrievedData); 
    if(this.id)
    this.getNextMember(this.gc.CatListFull, this.id.catid,'genie');
    }
  else{
    this.router.navigate(['/home']);
  }
}
getNextMember(array, productID, from) {
  var startIndex = array.indexOf(productID);
  console.log(array,productID,startIndex); 
  if(startIndex==array.length - 1){
    if(from=='genie'){
      this.router.navigate(['/home']);
    }
    else
    if(from=='category'){
      this.router.navigate(['/products', array[0]]);
    }
  }
  else{
      startIndex++;  
      console.log(array[startIndex]);
      this.router.navigate(['/products', array[startIndex]]);
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
//scroll script
// ngAfterViewInit(){
  
//     window.onscroll = function() {myFunction()};
//     var navbar = document.getElementById("sidebar_float");
//     var sticky = navbar.offsetTop;
//     function myFunction() {
//       if(window.matchMedia("(max-width: 1920px)").matches){
//         if (window.pageYOffset >= sticky) {
//           navbar.classList.add("sticky")
//         } else {
//           navbar.classList.remove("sticky");
//         }
//     }
//   }
// }
//
}


export interface CatId {  
  catid ?: number;
  sglist?:string;
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