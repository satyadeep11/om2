(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["customer-layout-customer-layout-module"],{

/***/ "./src/app/customer-layout/components/header/header.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/customer-layout/components/header/header.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg fixed-top\">\n  <a class=\"navbar-brand\" [routerLink]=\"['/home']\" [routerLinkActive]=\"['router-link-active']\">Quick Select Selection Tool</a>\n  <!-- <button class=\"navbar-toggler\" type=\"button\" (click)=\"toggleSidebar()\">\n      <span class=\"navbar-toggler-icon\"></span>\n      <i class=\"fa fa-bars text-muted\" aria-hidden=\"true\"></i>\n  </button> -->\n  <div class=\"collapse navbar-collapse\">\n      <!-- <form class=\"form-inline my-2 my-lg-0\">\n          <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"{{ 'Search' | translate }}\" >\n      </form> -->\n      <ul class=\"navbar-nav ml-auto\">\n                 \n          <li class=\"nav-item dropdown\" ngbDropdown>\n              <a href=\"javascript:void(0)\" class=\"nav-link\" ngbDropdownToggle>\n                  <i class=\"fa fa-bell\"></i> <b class=\"caret\"></b><span class=\"sr-only\">(current)</span>\n              </a>\n              <div class=\"dropdown-menu-right\" ngbDropdownMenu>\n                  \n                  <a href=\"javascript:void(0)\" class=\"dropdown-item\">\n                      {{ 'Invite accepted' | translate }} <span class=\"badge badge-info\"> 13</span>\n                  </a>\n                  <a href=\"javascript:void(0)\" class=\"dropdown-item\">\n                      {{ 'Invite pending' | translate }} <span class=\"badge badge-info\"> 45</span>\n                  </a>\n                  <li class=\"dropdown-divider\"></li>\n                  <a href=\"javascript:void(0)\" class=\"dropdown-item\">\n                      {{ 'View All' | translate }}\n                  </a>\n              </div>\n          </li>\n          \n          <li class=\"nav-item dropdown\" ngbDropdown>\n              <a href=\"javascript:void(0)\" class=\"nav-link\" ngbDropdownToggle>\n                  <i class=\"fa fa-user\"></i> {{fname|titlecase}} {{lname|titlecase}} <b class=\"caret\"></b>\n              </a>\n              <div class=\"dropdown-menu-right\" ngbDropdownMenu>\n                  <a class=\"dropdown-item\" href=\"javascript:void(0)\">\n                      <i class=\"fa fa-fw fa-user\"></i> {{ 'Profile' | translate }}\n                  </a>\n                  <a class=\"dropdown-item\" href=\"javascript:void(0)\">\n                      <i class=\"fa fa-fw fa-envelope\"></i> {{ 'Inbox' | translate }}\n                  </a>\n                  <a class=\"dropdown-item\" href=\"javascript:void(0)\">\n                      <i class=\"fa fa-fw fa-gear\"></i> {{ 'Settings' | translate }}\n                  </a>\n                  <a class=\"dropdown-item\" [routerLink]=\"['/login']\" (click)=\"onLoggedout()\">\n                      <i class=\"fa fa-fw fa-power-off\"></i> {{ 'Log Out' | translate }}\n                  </a>\n              </div>\n          </li>\n          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n      </ul>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/customer-layout/components/header/header.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/customer-layout/components/header/header.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .navbar {\n  background-color: #222; }\n  :host .navbar .navbar-brand {\n    color: #fff; }\n  :host .navbar .nav-item > a {\n    color: #999; }\n  :host .navbar .nav-item > a:hover {\n      color: #fff; }\n  :host .messages {\n  width: 300px; }\n  :host .messages .media {\n    border-bottom: 1px solid #ddd;\n    padding: 5px 10px; }\n  :host .messages .media:last-child {\n      border-bottom: none; }\n  :host .messages .media-body h5 {\n    font-size: 13px;\n    font-weight: 600; }\n  :host .messages .media-body .small {\n    margin: 0; }\n  :host .messages .media-body .last {\n    font-size: 12px;\n    margin: 0; }\n"

/***/ }),

/***/ "./src/app/customer-layout/components/header/header.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/customer-layout/components/header/header.component.ts ***!
  \***********************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(translate, router) {
        var _this = this;
        this.translate = translate;
        this.router = router;
        this.pushRightClass = 'push-right';
        this.translate.addLangs(['en', 'fr', 'ur', 'es', 'it', 'fa', 'de', 'zh-CHS']);
        this.translate.setDefaultLang('en');
        var browserLang = this.translate.getBrowserLang();
        this.translate.use(browserLang.match(/en|fr|ur|es|it|fa|de|zh-CHS/) ? browserLang : 'en');
        this.router.events.subscribe(function (val) {
            if (val instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"] &&
                window.innerWidth <= 992 &&
                _this.isToggled()) {
                _this.toggleSidebar();
            }
        });
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.fname = sessionStorage.getItem("fname").toString();
        this.lname = sessionStorage.getItem("lname").toString();
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
        sessionStorage.removeItem('isLoggedin');
        sessionStorage.removeItem('admin');
        sessionStorage.removeItem('fname');
        sessionStorage.removeItem('lname');
    };
    HeaderComponent.prototype.changeLang = function (language) {
        this.translate.use(language);
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/customer-layout/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/customer-layout/components/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/customer-layout/customer-layout-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/customer-layout/customer-layout-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: CustomerLayoutRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerLayoutRoutingModule", function() { return CustomerLayoutRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _customer_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./customer-layout.component */ "./src/app/customer-layout/customer-layout.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _customer_layout_component__WEBPACK_IMPORTED_MODULE_2__["CustomerLayoutComponent"],
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'prefix' },
            { path: 'home', loadChildren: './home/home.module#HomeModule' },
        ]
    }
];
var CustomerLayoutRoutingModule = /** @class */ (function () {
    function CustomerLayoutRoutingModule() {
    }
    CustomerLayoutRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], CustomerLayoutRoutingModule);
    return CustomerLayoutRoutingModule;
}());



/***/ }),

/***/ "./src/app/customer-layout/customer-layout.component.html":
/*!****************************************************************!*\
  !*** ./src/app/customer-layout/customer-layout.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<section class=\"main-container\">\n    <app-menu></app-menu>\n    <router-outlet></router-outlet>\n</section>\n \n "

/***/ }),

/***/ "./src/app/customer-layout/customer-layout.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/customer-layout/customer-layout.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  transition: margin-left 0.2s ease-in-out; }\n\n.main-container {\n  margin-top: 56px;\n  padding: 15px;\n  -ms-overflow-x: hidden;\n  overflow-x: hidden;\n  overflow-y: scroll;\n  position: relative;\n  overflow: hidden; }\n\n.collapsed {\n  margin-left: 100px; }\n\n@media screen and (max-width: 992px) {\n  .main-container {\n    margin-left: 0px !important; } }\n\n@media print {\n  .main-container {\n    margin-top: 0px !important;\n    margin-left: 0px !important; } }\n"

/***/ }),

/***/ "./src/app/customer-layout/customer-layout.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/customer-layout/customer-layout.component.ts ***!
  \**************************************************************/
/*! exports provided: CustomerLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerLayoutComponent", function() { return CustomerLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CustomerLayoutComponent = /** @class */ (function () {
    function CustomerLayoutComponent() {
    }
    CustomerLayoutComponent.prototype.ngOnInit = function () {
    };
    CustomerLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-customer-layout',
            template: __webpack_require__(/*! ./customer-layout.component.html */ "./src/app/customer-layout/customer-layout.component.html"),
            styles: [__webpack_require__(/*! ./customer-layout.component.scss */ "./src/app/customer-layout/customer-layout.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CustomerLayoutComponent);
    return CustomerLayoutComponent;
}());



/***/ }),

/***/ "./src/app/customer-layout/customer-layout.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/customer-layout/customer-layout.module.ts ***!
  \***********************************************************/
/*! exports provided: CustomerLayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerLayoutModule", function() { return CustomerLayoutModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _customer_layout_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./customer-layout-routing.module */ "./src/app/customer-layout/customer-layout-routing.module.ts");
/* harmony import */ var _customer_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./customer-layout.component */ "./src/app/customer-layout/customer-layout.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/customer-layout/components/header/header.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/customer-layout/menu/menu.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var CustomerLayoutModule = /** @class */ (function () {
    function CustomerLayoutModule() {
    }
    CustomerLayoutModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _customer_layout_routing_module__WEBPACK_IMPORTED_MODULE_4__["CustomerLayoutRoutingModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDropdownModule"].forRoot()
            ],
            declarations: [_customer_layout_component__WEBPACK_IMPORTED_MODULE_5__["CustomerLayoutComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"], _menu_menu_component__WEBPACK_IMPORTED_MODULE_7__["MenuComponent"]]
        })
    ], CustomerLayoutModule);
    return CustomerLayoutModule;
}());



/***/ }),

/***/ "./src/app/customer-layout/menu/menu.component.html":
/*!**********************************************************!*\
  !*** ./src/app/customer-layout/menu/menu.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<button mat-raised-button color=\"primary\" [matMenuTriggerFor]=\"apparels\" >Apparels</button> \r\n<button mat-raised-button color=\"primary\" [matMenuTriggerFor]=\"accessories\" >Accessories</button>\r\n<button mat-raised-button color=\"primary\" [matMenuTriggerFor]=\"fish\" >Hard Goods</button>\r\n<br><br>\r\n\r\n<mat-menu #apparels=\"matMenu\">\r\n  <button mat-menu-item [matMenuTriggerFor]=\"tshirts\">T Shirts</button>\r\n  <button mat-menu-item [matMenuTriggerFor]=\"shorts\">Shorts</button>\r\n</mat-menu>\r\n\r\n\r\n<mat-menu #accessories=\"matMenu\">\r\n  <button mat-menu-item>Regular</button>\r\n  <button mat-menu-item [matMenuTriggerFor]=\"shorts\">Special</button>\r\n</mat-menu>\r\n\r\n<mat-menu #tshirts=\"matMenu\">\r\n  <button mat-menu-item [matMenuTriggerFor]=\"fish\">Item1</button>\r\n  <button mat-menu-item [matMenuTriggerFor]=\"amphibians\">Item2</button>\r\n  <button mat-menu-item [matMenuTriggerFor]=\"reptiles\">Item3</button>\r\n  <button mat-menu-item>Item4</button>\r\n  <button mat-menu-item>Item5</button>\r\n</mat-menu>\r\n\r\n<mat-menu #shorts=\"matMenu\">\r\n  <button mat-menu-item>Item0</button>\r\n  <button mat-menu-item>Item1</button>\r\n  <button mat-menu-item>Item2</button>\r\n  <button mat-menu-item>Item3</button>\r\n  <button mat-menu-item>Item4</button>\r\n  <button mat-menu-item>Item5</button>\r\n  <button mat-menu-item>Item6</button>\r\n  <button mat-menu-item>Item7</button>\r\n</mat-menu>\r\n\r\n<mat-menu #fish=\"matMenu\">\r\n  <button mat-menu-item>sub item 0</button>\r\n  <button mat-menu-item>sub item 1</button>\r\n  <button mat-menu-item>sub item 2</button>\r\n  <button mat-menu-item>sub item 3</button>\r\n\r\n</mat-menu>\r\n\r\n<mat-menu #amphibians=\"matMenu\">\r\n  <button mat-menu-item>sub item 0</button>\r\n  <button mat-menu-item>sub item 1</button>\r\n  <button mat-menu-item>sub item 2</button>\r\n  <button mat-menu-item>sub item 3</button>\r\n</mat-menu>\r\n\r\n<mat-menu #reptiles=\"matMenu\">\r\n  <button mat-menu-item>sub item 0</button>\r\n  <button mat-menu-item>sub item 1</button>\r\n  <button mat-menu-item>sub item 2</button>\r\n  <button mat-menu-item>sub item 3</button>\r\n</mat-menu>"

/***/ }),

/***/ "./src/app/customer-layout/menu/menu.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/customer-layout/menu/menu.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  margin-top: 100px; }\n  :host .navbar {\n    background-color: #222; }\n  :host .navbar .navbar-brand {\n      color: #fff; }\n  :host .navbar .nav-item > a {\n      color: #999; }\n  :host .navbar .nav-item > a:hover {\n        color: #fff; }\n  :host .messages {\n    width: 300px; }\n  :host .messages .media {\n      border-bottom: 1px solid #ddd;\n      padding: 5px 10px; }\n  :host .messages .media:last-child {\n        border-bottom: none; }\n  :host .messages .media-body h5 {\n      font-size: 13px;\n      font-weight: 600; }\n  :host .messages .media-body .small {\n      margin: 0; }\n  :host .messages .media-body .last {\n      font-size: 12px;\n      margin: 0; }\n"

/***/ }),

/***/ "./src/app/customer-layout/menu/menu.component.ts":
/*!********************************************************!*\
  !*** ./src/app/customer-layout/menu/menu.component.ts ***!
  \********************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MenuComponent = /** @class */ (function () {
    function MenuComponent(router) {
        this.router = router;
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/customer-layout/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.scss */ "./src/app/customer-layout/menu/menu.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ })

}]);
//# sourceMappingURL=customer-layout-customer-layout-module.js.map