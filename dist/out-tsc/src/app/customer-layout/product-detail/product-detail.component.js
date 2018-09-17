"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var product_detail_service_1 = require("../product-detail.service");
var material_1 = require("@angular/material");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var auth_service_1 = require("../../auth.service");
var globalcart_1 = require("../globalcart");
var ProductDetailComponent = /** @class */ (function () {
    //variables end
    function ProductDetailComponent(route, productDetailService, snackBar, config, authService, gc) {
        this.route = route;
        this.productDetailService = productDetailService;
        this.snackBar = snackBar;
        this.authService = authService;
        this.gc = gc;
        //variables
        this.id = {};
        this.colorset = [];
        this.cartcheck = true;
        config.showNavigationIndicators = false;
    }
    ProductDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.id.productid = +params['id']; // (+) converts string 'id' to a number
        });
        this.productDetailService.product_detail(this.id)
            .subscribe(function (user) {
            _this.myData = user;
            // console.log(this.myData ); 
            _this.productid = _this.myData.product.ProductID;
            _this.price = _this.myData.product.Price;
            _this.updateImage(_this.myData.variants[0].ProductID, _this.myData.variants[0].ImageFile, 'product-img');
        }, function (error) { return console.log(error); });
        this.GetCart();
    };
    ProductDetailComponent.prototype.updateCart = function () {
        //insert cart data
        var retrievedData = sessionStorage.getItem("currentCart");
        var cartdetails = JSON.parse(retrievedData);
        if (cartdetails.cartproducts) {
            if (this.cartcheck && cartdetails.cartproducts.length > 0) {
                //console.log(cartdetails);
                var self = this;
                cartdetails.cartproducts.forEach(function (value) {
                    if (value.qs_prod_id == self.id.productid) {
                        // console.log(value.qs_prod_color,value.qs_prod_attr2);
                        self.colorselect(value.qs_prod_color, value.qs_prod_attr2);
                    }
                });
                this.cartcheck = false;
            }
        }
    };
    ProductDetailComponent.prototype.openSnackBar = function (msg, action) {
        this.snackBar.open(msg, action, {
            duration: 1500,
        });
    };
    ProductDetailComponent.prototype.colorselect = function (color, colorcode) {
        var _this = this;
        var retrievedData = sessionStorage.getItem("currentCart");
        var cartdetails = JSON.parse(retrievedData);
        var selectiondetails = {};
        selectiondetails.productid = +this.productid;
        selectiondetails.colorcodes = [colorcode];
        selectiondetails.colors = [color];
        selectiondetails.selectionid = cartdetails.selection_id;
        selectiondetails.price = this.price;
        // console.log('xxxxxxxxxx');
        // console.log(selectiondetails);
        // console.log('xxxxxxxxxx');
        var inputElement = document.getElementsByClassName(colorcode)[0];
        if (this.colorset.includes(color)) {
            this.openSnackBar('Color ' + color + ' Removed from Cart', 'OK');
            delete this.colorset[colorcode];
            this.colorselected = this.colorselected.replace(colorcode, '');
            // console.log(this.colorset);
            // console.log(Object.keys(this.colorset));
            // console.log(Object.values(this.colorset));
            //delete single prod selection
            this.productDetailService.deleteFromCart(selectiondetails)
                .subscribe(function (user) {
                // console.log(user);
                _this.myData.error = user.error;
            }, function (error) { return console.log(error); });
            this.GetCart();
        }
        else {
            this.openSnackBar('Color ' + color + ' Added to Cart', 'OK');
            this.colorset[colorcode] = color;
            this.colorselected = this.colorselected + colorcode;
            //this.colorset.push(color);
            // console.log(this.colorset);
            // console.log(Object.keys(this.colorset));
            // console.log(Object.values(this.colorset));
            //insert single prod selection //comment below if on swatch insert not needed
            this.productDetailService.addToCart(selectiondetails)
                .subscribe(function (user) {
                console.log(user);
                _this.myData.error = user.error;
            }, function (error) { return console.log(error); });
            this.GetCart();
        }
    };
    ProductDetailComponent.prototype.updateImage = function (product, image, imageid) {
        if (image) {
            var inputElement = document.getElementById(imageid);
            if (document.getElementById(imageid)) {
                var url = "https://www.afhsgear.com/sites/998/products/998_";
                inputElement.style.backgroundImage = 'url(' + url + product + '_' + image + ')';
            }
        }
    };
    ProductDetailComponent.prototype.CartCheck = function () {
        if ((Object.keys(this.colorset).length) == 0) {
            this.openSnackBar('Select Color first ' + '', 'OK');
        }
        else {
            this.SubmitCart();
        }
    };
    ProductDetailComponent.prototype.GetCart = function () {
        var _this = this;
        //updating local cart
        var user = {};
        user.uuid = sessionStorage.getItem("uuid").toString();
        this.authService.getCart(user)
            .subscribe(function (user) {
            //console.log(user);
            sessionStorage.setItem('currentCart', JSON.stringify(user));
            _this.gcUpdate();
        }, function (error) { return console.log(error); });
    };
    ProductDetailComponent.prototype.gcUpdate = function () {
        var retrievedData = sessionStorage.getItem("currentCart");
        var cartdetails = JSON.parse(retrievedData);
        var uniqueproductid = [];
        cartdetails.cartproducts.forEach(function (value) {
            uniqueproductid.push(value.qs_prod_id);
        });
        var unique = uniqueproductid.filter(function (elem, index, self) {
            return index === self.indexOf(elem);
        });
        this.gc.count = unique.length;
    };
    ProductDetailComponent.prototype.SubmitCart = function () {
        var _this = this;
        var retrievedData = sessionStorage.getItem("currentCart");
        var cartdetails = JSON.parse(retrievedData);
        var selectiondetails = {};
        selectiondetails.productid = +this.productid;
        selectiondetails.selectionid = cartdetails.selection_id;
        var x = Object.keys(this.colorset);
        var y = Object.values(this.colorset);
        selectiondetails.colorcodes = x.map(Number);
        selectiondetails.colors = y.map(String);
        console.log(selectiondetails);
        this.productDetailService.addToCart(selectiondetails)
            .subscribe(function (user) {
            //console.log(user);
            _this.myData.error = user.error;
        }, function (error) { return console.log(error); });
        this.GetCart();
    };
    ProductDetailComponent = __decorate([
        core_1.Component({
            selector: 'app-product-detail',
            templateUrl: './product-detail.component.html',
            styleUrls: ['./product-detail.component.scss']
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, product_detail_service_1.ProductDetailService, material_1.MatSnackBar, ng_bootstrap_1.NgbCarouselConfig,
            auth_service_1.AuthService, globalcart_1.GlobalCart])
    ], ProductDetailComponent);
    return ProductDetailComponent;
}());
exports.ProductDetailComponent = ProductDetailComponent;
//# sourceMappingURL=product-detail.component.js.map