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
var router_animations_1 = require("../../router.animations");
var product_detail_service_1 = require("../product-detail.service");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(productDetailService) {
        var _this = this;
        this.productDetailService = productDetailService;
        this.url = "url(https://www.afhsgear.com/sites/998/products/998_";
        this.url_close = ")";
        this.productDetailService.new_products().subscribe(function (user) {
            _this.myData = user;
            console.log(_this.myData);
        }, function (error) { return console.log(error); });
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.getMain = function (imagename) {
        return imagename.replace(".jpg", "_600.jpg");
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.scss'],
            animations: [router_animations_1.routerTransition()]
        }),
        __metadata("design:paramtypes", [product_detail_service_1.ProductDetailService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map