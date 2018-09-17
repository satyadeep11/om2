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
var ProductsComponent = /** @class */ (function () {
    function ProductsComponent(route, productDetailService, router) {
        var _this = this;
        this.route = route;
        this.productDetailService = productDetailService;
        this.router = router;
        this.id = {};
        this.url = "url(https://www.afhsgear.com/sites/998/products/998_";
        this.url_close = ")";
        this.products_per_page = 9;
        this.router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
        };
        this.sub = this.route.params.subscribe(function (params) {
            if (params['id']) {
                _this.id.catid = +params['id']; // (+) converts string 'id' to a number
            }
            else {
                _this.id.catid = 0;
            }
            console.log(_this.id);
        });
        if (this.id && this.id.catid != 0) {
            console.log(this.id);
            this.productDetailService.category_product(this.id)
                .subscribe(function (user) {
                _this.myData = user;
                console.log(_this.myData);
            }, function (error) { return console.log(error); });
        }
        else {
            this.productDetailService.category_product_all()
                .subscribe(function (user) {
                _this.myData = user;
                console.log(_this.myData);
            }, function (error) { return console.log(error); });
        }
    }
    ProductsComponent.prototype.ngOnInit = function () {
    };
    ProductsComponent = __decorate([
        core_1.Component({
            selector: 'app-products',
            templateUrl: './products.component.html',
            styleUrls: ['./products.component.scss']
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, product_detail_service_1.ProductDetailService, router_1.Router])
    ], ProductsComponent);
    return ProductsComponent;
}());
exports.ProductsComponent = ProductsComponent;
//# sourceMappingURL=products.component.js.map