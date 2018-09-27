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
var http_1 = require("@angular/http");
var operators_1 = require("rxjs/operators");
var globalcart_1 = require("./globalcart");
var ProductDetailService = /** @class */ (function () {
    function ProductDetailService(_http, gc) {
        this._http = _http;
        this.gc = gc;
    }
    ProductDetailService.prototype.product_detail = function (product) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var link = this.gc.link + "/php_api/masterdb/single-product.php";
        return this._http.post(link, product, options).pipe(operators_1.map(function (res) { return res.json(); }));
    };
    ProductDetailService.prototype.category_product = function (product) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var link = this.gc.link + "/php_api/masterdb/single-category.php";
        return this._http.post(link, product, options).pipe(operators_1.map(function (res) { return res.json(); }));
    };
    ProductDetailService.prototype.category_product_all = function () {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var link = this.gc.link + "/php_api/masterdb/all-category.php";
        return this._http.post(link, options).pipe(operators_1.map(function (res) { return res.json(); }));
    };
    ProductDetailService.prototype.new_products = function () {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var link = this.gc.link + "/php_api/masterdb/get-new-product.php";
        return this._http.post(link, options).pipe(operators_1.map(function (res) { return res.json(); }));
    };
    ProductDetailService.prototype.addToCart = function (product) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var link = this.gc.link + "/php_api/add-to-cart.php";
        return this._http.post(link, product, options).pipe(operators_1.map(function (res) { return res.json(); }));
    };
    ProductDetailService.prototype.deleteFromCart = function (product) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var link = this.gc.link + "/php_api/delete-from-cart.php";
        return this._http.post(link, product, options).pipe(operators_1.map(function (res) { return res.json(); }));
    };
    ProductDetailService.prototype.deleteProduct = function (product) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var link = this.gc.link + "/php_api/delete-product.php";
        return this._http.post(link, product, options).pipe(operators_1.map(function (res) { return res.json(); }));
    };
    ProductDetailService.prototype.SubmitCart = function (product) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var link = this.gc.link + "/php_api/submit-product.php";
        return this._http.post(link, product, options).pipe(operators_1.map(function (res) { return res.json(); }));
    };
    ProductDetailService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [http_1.Http, globalcart_1.GlobalCart])
    ], ProductDetailService);
    return ProductDetailService;
}());
exports.ProductDetailService = ProductDetailService;
//# sourceMappingURL=product-detail.service.js.map