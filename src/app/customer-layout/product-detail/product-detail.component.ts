import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductDetailService } from '../product-detail.service'; 
import {MatSnackBar} from '@angular/material';

import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../../auth.service';
import {GlobalCart} from '../globalcart';


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
  productid:number;
  price:number;
  name:string;
  colorselected:any;
  cartcheck=true;
  cart=[]; 
//variables end

constructor(  private route: ActivatedRoute,
              private productDetailService: ProductDetailService,
              public snackBar: MatSnackBar,
              config: NgbCarouselConfig,
              private authService: AuthService,
              private gc: GlobalCart) 
              { 
                config.showNavigationIndicators = false; 
              }

ngOnInit()  {
              this.sub = this.route.params.subscribe(params => {
                this.id.productid = +params['id']; 
              });

              this.productDetailService.product_detail(this.id).subscribe(user => {
                this.myData = user; 
                
                this.productid=this.myData.product.ProductID;
                this.price=this.myData.product.Price;
                this.name=this.myData.product.ProductName;
                this.updateImage(this.myData.variants[0].ProductID, this.myData.variants[0].ImageFile,'product-img');
              },
              error => console.log(error)
              );
              this.GetCart();
              this.updateCart();
              
            }

updateCart()  {
                var retrievedData = sessionStorage.getItem("currentCart");        
                var cartdetails = JSON.parse(retrievedData);  
                if(cartdetails.cartproducts){
                  if(this.cartcheck && cartdetails.cartproducts.length>0){
                    var self = this;
                    cartdetails.cartproducts.forEach(function (value) {
                      if(value.ProductID==self.id.productid){                        
                        self.colorselected =self.colorselected+value.Attr2;
                        console.log(self.colorselected);
                        
                        self.cart.push(value);       
                      }
                    })
                    this.cartcheck=false;
                  }
                  
                }
                
              }

openSnackBar(msg,action)  {
                            this.snackBar.open(msg,action, {
                              duration: 1500,
                            });
                          }

addtoCart(color,colorcode,image) {
                                    
                                    var retrievedData = sessionStorage.getItem("currentCart");        
                                    var cartdetails = JSON.parse(retrievedData);
                                    let selectiondetails:Cart={};
                                    selectiondetails.productid=+this.productid;     
                                    selectiondetails.colorcodes=[colorcode];
                                    selectiondetails.colors=[color];
                                    selectiondetails.selectionid=cartdetails.selection_id;
                                    selectiondetails.price=this.price;
                                    selectiondetails.name=this.name;
                                    selectiondetails.image=[image];
                                    this.openSnackBar('Color '+ color +' Added to Cart', 'OK'); 
                                    this.colorset[colorcode]=color;
                                    this.colorselected=this.colorselected+colorcode;
                                    console.log(this.colorselected);
                                    this.productDetailService.addToCart(selectiondetails).subscribe(user => {
                                      //console.log(user);
                                      this.myData.error = user.error;       
                                    },
                                    error => console.log(error)
                                    );
                                    this.GetCart();
                                    this.updateCart();

                                    this.cart.push({ProductID:+this.productid,Attr2:colorcode,A2_Label:color,Price:+this.price,ProductName:this.name,ImageFile:image});
                                    console.log(this.cart);
                                  }

deletefromCart(color,colorcode,image) {
                                  console.log(this.colorselected);
                                  this.colorselected=this.colorselected.replace(colorcode,'');
                                  
                                  var retrievedData = sessionStorage.getItem("currentCart");        
                                  var cartdetails = JSON.parse(retrievedData);  
                                  let selectiondetails:Cart={};
                                  selectiondetails.productid=+this.productid;     
                                  selectiondetails.colorcodes=[colorcode];
                                  selectiondetails.colors=[color];
                                  selectiondetails.selectionid=cartdetails.selection_id;
                                  selectiondetails.price=this.price; 
                                  this.openSnackBar('Color '+ color+ ' Removed from Cart','OK'); 
                                  delete this.colorset[colorcode];   
                                  
                                  this.productDetailService.deleteFromCart(selectiondetails).subscribe(user => {
                                    this.myData.error = user.error;       
                                    },
                                    error => console.log(error)
                                  );
                                  this.GetCart();
                                  this.cart.forEach( (item, index) => {
                                    if(item.Attr2 == colorcode) this.cart.splice(index,1);
                                  });
                                    console.log(this.cart);
                                }



public updateImage(product,image,imageid) {
                                            if(image) {
                                              var inputElement = <HTMLInputElement>document.getElementById(imageid);
                                              if(document.getElementById(imageid)){
                                                var url="https://www.afhsgear.com/sites/998/products/998_";
                                                inputElement.style.backgroundImage = 'url('+url+ product +'_'+ image + ')';
                                              }
                                            }
                                          }

CartCheck() {
              if((Object.keys(this.colorset).length)==0){
                this.openSnackBar('Select Color first '+ '','OK');      
              }
              else{
                this.SubmitCart();
              }
            }

GetCart() {    
            let user:Cart={};
            user.uuid=sessionStorage.getItem("uuid").toString();
            this.authService.getCart(user).subscribe(user => {        
              sessionStorage.setItem('currentCart', JSON.stringify(user));     
              this.gcUpdate();  
              this.updateCart();    
            },
            error => console.log(error)
            );  
          }

gcUpdate() {
              var retrievedData = sessionStorage.getItem("currentCart");        
              var cartdetails = JSON.parse(retrievedData); 
              //console.log(cartdetails);
              //this.cart=cartdetails;
            //console.log(this.cart);
              var uniqueproductid=[];
              cartdetails.cartproducts.forEach(function (value) {
                uniqueproductid.push(value.ProductID);
              }); 
              var unique = uniqueproductid.filter(function(elem, index, self) {
                return index === self.indexOf(elem);
              })
              this.gc.count=unique.length;
            }
SubmitCart() {
                var retrievedData = sessionStorage.getItem("currentCart");        
                var cartdetails = JSON.parse(retrievedData);
                let selectiondetails:Cart={};
                selectiondetails.productid=+this.productid; 
                selectiondetails.selectionid=cartdetails.selection_id;
                let x=Object.keys(this.colorset); 
                let y=Object.values(this.colorset);
                selectiondetails.colorcodes=x.map(Number);
                selectiondetails.colors=y.map(String);
                console.log(selectiondetails);
                this.productDetailService.addToCart(selectiondetails).subscribe(user => {
                  this.myData.error = user.error;       
                },
                error => console.log(error)
                );
                this.GetCart();
              }
}


export interface PriceId {  
  productid ?: number;
}

export interface Cart {  
  productid ?: number;
  uuid?:string;
  name?:string;
  colors?:Array<String>;
  colorcodes?:Array<Number>;
  image?:Array<String>;
  error?:string;
  selectionid?:number;
  price?:number;
  Attr2?: number;
  ProductID?: number;
  ImageFile?: string;
  A2_Label?: string;
  
}

export interface ColorSet {  
  color ?: string;
  colorset ?: number;
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


