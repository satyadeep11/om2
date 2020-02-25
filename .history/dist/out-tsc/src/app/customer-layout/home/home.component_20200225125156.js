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
var router_animations_1 = require("../../router.animations");
var genie_component_1 = require("./genie/genie.component");
var product_detail_service_1 = require("../product-detail.service");
var material_1 = require("@angular/material");
var globalcart_1 = require("../globalcart");
var HomeComponent = /** @class */ (function() {
    function HomeComponent(productDetailService, gc, dialog) {
        var _this = this;
        this.productDetailService = productDetailService;
        this.gc = gc;
        this.dialog = dialog;
        this.url = "url(https://securedgear.com/sites/998/products/998_";
        this.url_close = ")";
        // if(!localStorage.getItem("CatListFull")){
        //     this.dialog.open(GenieComponent, {
        //     width: '500px',
        //     data: {}
        //   });
        // }
        this.productDetailService.category_all().subscribe(function(user) {
            _this.myData = user;
            console.log(_this.myData);
            gc.CatListFull = [];
            _this.myData.cats.forEach(function(value) {
                if (+value.CategoryParent != 0) {
                    gc.CatListFull.push(+value.CategoryID);
                    localStorage.setItem('CatListFull', JSON.stringify(gc.CatListFull));
                }
            });
            console.log(gc.CatListFull);
        }, function(error) { return console.log(error); });
        this.productDetailService.new_products().subscribe(function(user) {
            _this.myData = user;
            console.log(_this.myData);
        }, function(error) { return console.log(error); });
    }
    HomeComponent.prototype.ngOnInit = function() {};
    HomeComponent.prototype.getMain = function(imagename) {
        if (imagename)
            return imagename.replace(".jpg", "_600.jpg");
    };
    HomeComponent.prototype.LoadGenie = function() {
        this.dialog.open(genie_component_1.GenieComponent, {
            width: '500px',
            data: {}
        });
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.scss'],
            animations: [router_animations_1.routerTransition()]
        }),
        __metadata("design:paramtypes", [product_detail_service_1.ProductDetailService, globalcart_1.GlobalCart, material_1.MatDialog])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map