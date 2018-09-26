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
var globalcart_1 = require("../globalcart");
var product_detail_service_1 = require("../product-detail.service");
var auth_service_1 = require("../../auth.service");
var material_1 = require("@angular/material");
var CartComponent = /** @class */ (function () {
    function CartComponent(gc, authService, snackBar, productDetailService) {
        this.gc = gc;
        this.authService = authService;
        this.snackBar = snackBar;
        this.productDetailService = productDetailService;
        this.newCart = [];
        var retrievedData = localStorage.getItem("currentCart");
        this.productList = JSON.parse(retrievedData);
        var colors_container = [];
        var uniqueproductid = [];
        if (this.productList) {
            var self = this;
            this.productList.cartproducts.forEach(function (value) {
                uniqueproductid[value.ProductID] = [];
                uniqueproductid[value.ProductID]['Colors'] = [];
                uniqueproductid[value.ProductID]['ProductID'] = value.ProductID;
                uniqueproductid[value.ProductID]['ImageFile'] = value.ImageFile;
                uniqueproductid[value.ProductID]['Price'] = value.Price;
                uniqueproductid[value.ProductID]['ProductName'] = value.ProductName;
                self.productList.cartproducts.forEach(function (value2) {
                    if (value2.ProductID == value.ProductID && value2.A2_Label) {
                        colors_container = (value2.A2_Label);
                        uniqueproductid[value.ProductID]['Colors'].push(colors_container);
                    }
                });
            });
            this.newCart = this.cleanArray(uniqueproductid);
        }
    }
    CartComponent.prototype.ngOnInit = function () {
        console.log(this.productList);
        console.log(this.newCart);
    };
    CartComponent.prototype.cleanArray = function (actual) {
        var newArray = new Array();
        for (var i = 0; i < actual.length; i++) {
            if (actual[i]) {
                newArray.push(actual[i]);
            }
        }
        return newArray;
    };
    CartComponent.prototype.DeleteProduct = function (ProductID, ProductName) {
        var _this = this;
        var productdetails = {};
        productdetails.selectionid = this.productList.selection_id;
        productdetails.productid = ProductID;
        this.productDetailService.deleteProduct(productdetails).subscribe(function (user) {
            //console.log(user);
            // this.myData.error = user.error;  
            _this.GetCart();
        }, function (error) { return console.log(error); });
        this.newCart.forEach(function (item, index) {
            if (item.ProductID == ProductID)
                _this.newCart.splice(index, 1);
        });
        this.openSnackBar(ProductName + ' removed from selection.', '', 'red-snackbar');
    };
    CartComponent.prototype.openSnackBar = function (msg, action, className) {
        this.snackBar.open(msg, action, {
            duration: 2500,
            panelClass: [className]
        });
    };
    CartComponent.prototype.SubmitCart = function () {
        var _this = this;
        localStorage.removeItem('visitedproducts');
        if (this.gc.count == 0) {
            this.openSnackBar('No Products Selected ', '', 'red-snackbar');
        }
        else {
            var cartdetails = {};
            cartdetails.selectionid = this.productList.selection_id;
            cartdetails.uuid = localStorage.getItem("uuid").toString();
            this.productDetailService.SubmitCart(cartdetails).subscribe(function (user) {
                //console.log(user);
                // this.myData.error = user.error;  
                _this.GetCart();
            }, function (error) { return console.log(error); });
        }
    };
    CartComponent.prototype.GetCart = function () {
        var _this = this;
        var user = {};
        user.uuid = localStorage.getItem("uuid").toString();
        this.authService.getCart(user).subscribe(function (user) {
            localStorage.setItem('currentCart', JSON.stringify(user));
            _this.gcUpdate();
        }, function (error) { return console.log(error); });
    };
    CartComponent.prototype.gcUpdate = function () {
        var retrievedData = localStorage.getItem("currentCart");
        var cartdetails = JSON.parse(retrievedData);
        var uniqueproductid = [];
        cartdetails.cartproducts.forEach(function (value) {
            uniqueproductid.push(value.ProductID);
        });
        var unique = uniqueproductid.filter(function (elem, index, self) {
            return index === self.indexOf(elem);
        });
        this.gc.count = unique.length;
    };
    CartComponent = __decorate([
        core_1.Component({
            selector: 'app-cart',
            templateUrl: './cart.component.html',
            styleUrls: ['./cart.component.scss']
        }),
        __metadata("design:paramtypes", [globalcart_1.GlobalCart,
            auth_service_1.AuthService,
            material_1.MatSnackBar,
            product_detail_service_1.ProductDetailService])
    ], CartComponent);
    return CartComponent;
}());
exports.CartComponent = CartComponent;
//# sourceMappingURL=cart.component.js.map