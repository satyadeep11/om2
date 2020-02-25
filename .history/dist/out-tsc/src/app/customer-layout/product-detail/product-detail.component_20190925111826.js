"use strict";
var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var product_detail_service_1 = require("../product-detail.service");
var material_1 = require("@angular/material");
var router_2 = require("@angular/router");
var core_2 = require("@angular/core");
var auth_service_1 = require("../../auth.service");
var globalcart_1 = require("../globalcart");
var router_3 = require("@angular/router");
var operators_1 = require("rxjs/operators");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var ProductDetailComponent = /** @class */ (function() {
    //variables end
    function ProductDetailComponent(route, productDetailService, snackBar, authService, gc, render, modalService, router) {
        this.route = route;
        this.productDetailService = productDetailService;
        this.snackBar = snackBar;
        this.authService = authService;
        this.gc = gc;
        this.render = render;
        this.modalService = modalService;
        this.router = router;
        this.id = {};
        this.colorset = [];
        this.cartcheck = true;
        this.cart = [];
        this.visitedproducts = '';
        this.url = "url(https://securedgear.com/sites/998/products/998_";
        this.url_close = ")";
        this.router.routeReuseStrategy.shouldReuseRoute = function() {
            return false;
        };
    }
    ProductDetailComponent.prototype.ngOnInit = function() {
        var _this = this;
        this.sub = this.route.params.subscribe(function(params) {
            _this.id.productid = +params['id'];
        });
        this.productDetailService.product_detail(this.id).subscribe(function(user) {
            _this.myData = user;
            _this.catname = _this.myData.product.CategoryName;
            _this.catid = _this.myData.product.CatID;
            if (_this.catid.includes(',')) {
                var idarray = _this.catid.split(',');
                var namearray = _this.catname.split(',');
                _this.getPreviousUrl();
                var previousUrl = localStorage.getItem('previousUrl');
                var index = idarray.indexOf(previousUrl);
                if (!idarray.includes(previousUrl)) {
                    index = 0;
                }
                _this.catid = idarray[index];
                _this.catname = namearray[index];
            }
            console.log(_this.myData);
            _this.productid = _this.myData.product.ProductID;
            _this.visitedproducts = localStorage.getItem("visitedproducts");
            _this.visitedproducts = _this.visitedproducts + _this.productid.toString();
            localStorage.setItem('visitedproducts', _this.visitedproducts);
            _this.price = _this.myData.product.Price;
            _this.name = _this.myData.product.ProductName;
            _this.updateImage(_this.myData.variants[0].ProductID, _this.getMain(_this.myData.variants[0].ImageFile), 'product-img');
        }, function(error) { return console.log(error); });
        this.GetCart();
        this.updateCart();
    };
    ProductDetailComponent.prototype.getPreviousUrl = function() {
        this.router.events
            .pipe(operators_1.filter(function(e) { return e instanceof router_3.RoutesRecognized; }), operators_1.pairwise()).subscribe(function(e) {
                localStorage.setItem('previousUrl', e[0].urlAfterRedirects.substr(e[0].urlAfterRedirects.lastIndexOf('/') + 1));
            });
    };
    ProductDetailComponent.prototype.updateCart = function() {
        var retrievedData = localStorage.getItem("currentCart");
        var cartdetails = JSON.parse(retrievedData);
        if (cartdetails) {
            if (this.cartcheck && cartdetails.cartproducts.length > 0) {
                var self = this;
                cartdetails.cartproducts.forEach(function(value) {
                    if (value.ProductID == self.id.productid) {
                        if (self.colorselected) {
                            self.colorselected = self.colorselected.replace(new RegExp(value.Attr2), '');
                        }
                        self.colorselected = self.colorselected + value.Attr2;
                        //console.log(self.colorselected);
                        if (self.cart) {
                            self.cart.forEach(function(item, index) {
                                if (item.Attr2 == value.Attr2)
                                    self.cart.splice(index, 1);
                            });
                        }
                        self.cart.push(value);
                    }
                });
                this.cartcheck = false;
            }
        }
    };
    ProductDetailComponent.prototype.openSnackBar = function(msg, action, className) {
        this.snackBar.open(msg, action, {
            duration: 2500,
            panelClass: [className]
        });
    };
    ProductDetailComponent.prototype.colorSelected = function(id) {
        event.preventDefault();
        this.render.setElementClass(document.getElementById(id), "circle", true);
    };
    ProductDetailComponent.prototype.colorRemoved = function(id) {
        event.preventDefault();
        this.render.setElementClass(document.getElementById(id), "circle", false);
    };
    ProductDetailComponent.prototype.checkcolorCart = function(color, colorcode, image) {
        console.log(this.cart);
        if (this.cart.length == 0) {
            this.addtoCart(color, colorcode, image);
            this.colorSelected('color' + colorcode);
        } else if (this.cart.some(function(o) { return o["Attr2"] === colorcode; })) {
            this.deletefromCart(color, colorcode, image);
            this.colorRemoved('color' + colorcode);
        } else {
            this.addtoCart(color, colorcode, image);
            this.colorSelected('color' + colorcode);
        }
    };
    ProductDetailComponent.prototype.addtoCart = function(color, colorcode, image) {
        var _this = this;
        if (this.colorselected) {
            this.colorselected = this.colorselected.replace(new RegExp(colorcode), '');
        }
        if (this.cart) {
            this.cart.forEach(function(item, index) {
                if (item.Attr2 == colorcode)
                    _this.cart.splice(index, 1);
            });
        }
        this.cart.push({ ProductID: +this.productid, Attr2: colorcode, A2_Label: color, Price: +this.price, ProductName: this.name, ImageFile: image });
        var retrievedData = localStorage.getItem("currentCart");
        var cartdetails = JSON.parse(retrievedData);
        var selectiondetails = {};
        selectiondetails.productid = +this.productid;
        selectiondetails.colorcodes = [colorcode];
        selectiondetails.colors = [color];
        selectiondetails.selectionid = cartdetails.selection_id;
        selectiondetails.price = this.price;
        selectiondetails.name = this.name;
        selectiondetails.image = [image];
        selectiondetails.status = 0;
        this.openSnackBar('Color ' + color + ' added to Selection', '', 'green-snackbar');
        this.colorset[colorcode] = color;
        this.colorselected = this.colorselected + colorcode;
        // console.log(this.colorselected);
        this.productDetailService.addToCart(selectiondetails).subscribe(function(user) {
            //console.log(user);
            _this.myData.error = user.error;
            _this.GetCart();
        }, function(error) { return console.log(error); });
        //console.log(this.gc.count);
    };
    ProductDetailComponent.prototype.deletefromCart = function(color, colorcode, image) {
        var _this = this;
        if (this.colorselected) {
            this.colorselected = this.colorselected.replace(new RegExp(colorcode), '');
        }
        // console.log(this.colorselected);
        var retrievedData = localStorage.getItem("currentCart");
        var cartdetails = JSON.parse(retrievedData);
        var selectiondetails = {};
        selectiondetails.productid = +this.productid;
        selectiondetails.colorcodes = [colorcode];
        selectiondetails.colors = [color];
        selectiondetails.selectionid = cartdetails.selection_id;
        selectiondetails.price = this.price;
        selectiondetails.status = 0;
        this.openSnackBar('Color ' + color + ' removed from Selection', '', 'red-snackbar');
        delete this.colorset[colorcode];
        this.productDetailService.deleteFromCart(selectiondetails).subscribe(function(user) {
            _this.myData.error = user.error;
            _this.GetCart();
        }, function(error) { return console.log(error); });
        this.cart.forEach(function(item, index) {
            if (item.Attr2 == colorcode)
                _this.cart.splice(index, 1);
        });
        // console.log(this.cart);
        //console.log(this.gc.count);
    };
    ProductDetailComponent.prototype.updateImage = function(product, image, imageid) {
        if (image) {
            var inputElement = document.getElementById(imageid);
            if (document.getElementById(imageid)) {
                var url = "https://securedgear.com/sites/998/products/998_";
                inputElement.style.backgroundImage = 'url(' + url + product + '_' + image + ')';
            }
        }
    };
    // CartCheck() {
    //               if((Object.keys(this.colorset).length)==0){
    //                 this.openSnackBar('Select Color first '+ '','OK');      
    //               }
    //               else{
    //                 this.SubmitCart();
    //               }
    //             }
    ProductDetailComponent.prototype.GetCart = function() {
        var _this = this;
        var user = {};
        user.uuid = localStorage.getItem("uuid").toString();
        this.authService.getCart(user).subscribe(function(user) {
            localStorage.setItem('currentCart', JSON.stringify(user));
            //console.log(user); 
            _this.gcUpdate();
            _this.updateCart();
        }, function(error) { return console.log(error); });
    };
    ProductDetailComponent.prototype.gcUpdate = function() {
        var retrievedData = localStorage.getItem("currentCart");
        var cartdetails = JSON.parse(retrievedData);
        //console.log(cartdetails);
        //this.cart=cartdetails;
        //console.log(this.cart);
        var uniqueproductid = [];
        cartdetails.cartproducts.forEach(function(value) {
            uniqueproductid.push(value.ProductID);
        });
        var unique = uniqueproductid.filter(function(elem, index, self) {
            return index === self.indexOf(elem);
        });
        this.gc.count = unique.length;
        // console.log(cartdetails);
        // console.log(this.gc.count);
    };
    ProductDetailComponent.prototype.SubmitCart = function() {
        // var retrievedData = localStorage.getItem("currentCart");        
        // var cartdetails = JSON.parse(retrievedData);
        // let selectiondetails:Cart={};
        // selectiondetails.productid=+this.productid; 
        // selectiondetails.selectionid=cartdetails.selection_id;
        // let x=Object.keys(this.colorset); 
        // let y=Object.values(this.colorset);
        // selectiondetails.colorcodes=x.map(Number);
        // selectiondetails.colors=y.map(String);
        // console.log(selectiondetails);
        // this.productDetailService.addToCart(selectiondetails).subscribe(user => {
        //   this.myData.error = user.error;       
        // },
        // error => console.log(error)
        // );
        // this.GetCart();
        if (this.gc.productlist.length > 0) {
            this.getNextMember(this.gc.productlist, +this.productid, 'genie');
        } else if (localStorage.getItem("productList")) {
            var retrievedData = localStorage.getItem("productList");
            this.gc.productlist = JSON.parse(retrievedData);
            this.getNextMember(this.gc.productlist, +this.productid, 'genie');
        } else if (this.gc.productlistcategory.length > 0) {
            this.getNextMember(this.gc.productlistcategory, +this.productid, 'category');
        } else {
            this.router.navigate(['/home']);
        }
    };
    ProductDetailComponent.prototype.BacktoCategory = function(param, content) {
        if (param == "add") {
            if (this.cart.length == 0) {
                this.openSnackBar('No Colors Selected', '', 'red-snackbar');
            } else {
                // this.router.navigate(['/products', this.catid]);
                this.modalReference = this.modalService.open(content, { centered: true });
            }
        } else if (param == "back") {
            this.router.navigate(['/products', this.catid]);
        }
    };
    ProductDetailComponent.prototype.ImageClick = function(url, imagezoom) {
        url = url.replace("url\(", "").replace("\)", "").replace("\"", "").replace("\"", "");
        // url=url.replace("_600.jpg",".jpg");
        // window.open(url);
        this.modalReference = this.modalService.open(imagezoom, { centered: true, size: "lg" });
        this.imageurl = url;
    };
    ProductDetailComponent.prototype.ImageClickNewTab = function(url) {
        url = url.replace("url\(", "").replace("\)", "").replace("\"", "").replace("\"", "");
        url = url.replace("_600.jpg", ".jpg");
        window.open(url);
    };
    ProductDetailComponent.prototype.closeModal = function() {
        this.modalReference.close();
    };
    ProductDetailComponent.prototype.getNextMember = function(array, productID, from) {
        var startIndex = array.indexOf(productID);
        console.log(array, productID, startIndex);
        if (startIndex == array.length - 1) {
            if (from == 'genie') {
                this.router.navigate(['/cart']);
            } else if (from == 'category') {
                this.router.navigate(['/products', array[0]]);
            }
        } else {
            // if(from=='category'){
            //   this.router.navigate(['/products', array[0]]);
            // }
            // else{// need to fix this , coming from home page the next button displays error as it takes you to product detail page with category id
            startIndex++;
            console.log(array[startIndex]);
            this.router.navigate(['/product-detail', array[startIndex]]);
        }
    };
    ProductDetailComponent.prototype.getThumb = function(imagename) {
        return imagename.replace(".jpg", "_60.jpg");
    };
    ProductDetailComponent.prototype.getThumb200 = function(imagename) {
        return imagename.replace(".jpg", "_200.jpg");
    };
    ProductDetailComponent.prototype.getMain = function(imagename) {
        return imagename.replace(".jpg", "_600.jpg");
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], ProductDetailComponent.prototype, "imageurl", void 0);
    ProductDetailComponent = __decorate([
        core_1.Component({
            selector: 'app-product-detail',
            templateUrl: './product-detail.component.html',
            styleUrls: ['./product-detail.component.scss']
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            product_detail_service_1.ProductDetailService,
            material_1.MatSnackBar,
            auth_service_1.AuthService,
            globalcart_1.GlobalCart,
            core_2.Renderer,
            ng_bootstrap_1.NgbModal,
            router_2.Router
        ])
    ], ProductDetailComponent);
    return ProductDetailComponent;
}());
exports.ProductDetailComponent = ProductDetailComponent;
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
//# sourceMappingURL=product-detail.component.js.map