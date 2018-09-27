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
var core_2 = require("@ngx-translate/core");
var globalcart_1 = require("../../globalcart");
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(translate, router, gc) {
        var _this = this;
        this.translate = translate;
        this.router = router;
        this.gc = gc;
        this.pushRightClass = 'push-right';
        this.router.events.subscribe(function (val) {
            _this.gcUpdate();
        });
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.fname = localStorage.getItem("fname").toString();
        this.lname = localStorage.getItem("lname").toString();
    };
    HeaderComponent.prototype.gcUpdate = function () {
        var retrievedData = localStorage.getItem("currentCart");
        var cartdetails = JSON.parse(retrievedData);
        var uniqueproductid = [];
        if (cartdetails) {
            cartdetails.cartproducts.forEach(function (value) {
                uniqueproductid.push(value.ProductID);
            });
            var unique = uniqueproductid.filter(function (elem, index, self) {
                return index === self.indexOf(elem);
            });
            this.gc.count = unique.length;
        }
    };
    HeaderComponent.prototype.isToggled = function () {
        var dom = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    };
    HeaderComponent.prototype.toggleSidebar = function () {
        var dom = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    };
    HeaderComponent.prototype.rltAndLtr = function () {
        var dom = document.querySelector('body');
        dom.classList.toggle('rtl');
    };
    HeaderComponent.prototype.onLoggedout = function () {
        localStorage.removeItem('currentCart');
        localStorage.removeItem('isLoggedin');
        localStorage.removeItem('uuid');
        localStorage.removeItem('lname');
        localStorage.removeItem('fname');
        // localStorage.clear();
    };
    HeaderComponent.prototype.changeLang = function (language) {
        this.translate.use(language);
    };
    HeaderComponent = __decorate([
        core_1.Component({
            selector: 'app-header',
            templateUrl: './header.component.html',
            styleUrls: ['./header.component.scss']
        }),
        __metadata("design:paramtypes", [core_2.TranslateService, router_1.Router, globalcart_1.GlobalCart])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;
//# sourceMappingURL=header.component.js.map