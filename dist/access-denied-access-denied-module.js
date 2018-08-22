(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["access-denied-access-denied-module"],{

/***/ "./src/app/access-denied/access-denied-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/access-denied/access-denied-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: AccessDeniedRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessDeniedRoutingModule", function() { return AccessDeniedRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _access_denied_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./access-denied.component */ "./src/app/access-denied/access-denied.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '', component: _access_denied_component__WEBPACK_IMPORTED_MODULE_2__["AccessDeniedComponent"]
    }
];
var AccessDeniedRoutingModule = /** @class */ (function () {
    function AccessDeniedRoutingModule() {
    }
    AccessDeniedRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AccessDeniedRoutingModule);
    return AccessDeniedRoutingModule;
}());



/***/ }),

/***/ "./src/app/access-denied/access-denied.component.html":
/*!************************************************************!*\
  !*** ./src/app/access-denied/access-denied.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"error-page\" [@routerTransition]>\n  <div class=\"row justify-content-md-center\">\n      <div class=\"col-md-4\">\n          <img src=\"http://apparel.idw-quickselect.com/wp-content/uploads/sites/3/2017/06/Artboard-1.png\" width=\"250px\" class=\"user-avatar1\" />\n          <h1>Access Denied</h1>   \n          <div class=\"form-content\"></div>\n          <a class=\"btn rounded-btn\"  [routerLink]=\"['/login']\"> Try Again </a>\n                &nbsp;\n          <a class=\"btn rounded-btn\" [routerLink]=\"['/signup']\">Register</a>       \n      </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/access-denied/access-denied.component.scss":
/*!************************************************************!*\
  !*** ./src/app/access-denied/access-denied.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block; }\n\n.error-page {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  overflow: auto;\n  background: #222;\n  text-align: center;\n  color: #fff;\n  padding: 3em; }\n\n.error-page .col-lg-4 {\n    padding: 0; }\n\n.error-page .input-lg {\n    height: 46px;\n    padding: 10px 16px;\n    font-size: 18px;\n    line-height: 1.3333333;\n    border-radius: 0; }\n\n.error-page .input-underline {\n    background: 0 0;\n    border: none;\n    box-shadow: none;\n    border-bottom: 2px solid rgba(255, 255, 255, 0.5);\n    color: #fff;\n    border-radius: 0; }\n\n.error-page .input-underline:focus {\n    border-bottom: 2px solid #fff;\n    box-shadow: none; }\n\n.error-page .rounded-btn {\n    border-radius: 50px;\n    color: rgba(255, 255, 255, 0.8);\n    background: #222;\n    border: 2px solid rgba(255, 255, 255, 0.8);\n    font-size: 18px;\n    line-height: 40px;\n    padding: 0 25px; }\n\n.error-page .rounded-btn:hover,\n  .error-page .rounded-btn:focus,\n  .error-page .rounded-btn:active,\n  .error-page .rounded-btn:visited {\n    color: white;\n    border: 2px solid white;\n    outline: none; }\n\n.error-page h1 {\n    font-weight: 300;\n    margin-top: 20px;\n    margin-bottom: 10px;\n    font-size: 36px; }\n\n.error-page h1 small {\n      color: rgba(255, 255, 255, 0.7); }\n\n.error-page .form-group {\n    padding: 8px 0; }\n\n.error-page .form-group input::-webkit-input-placeholder {\n      color: rgba(255, 255, 255, 0.6) !important; }\n\n.error-page .form-group input:-moz-placeholder {\n      /* Firefox 18- */\n      color: rgba(255, 255, 255, 0.6) !important; }\n\n.error-page .form-group input::-moz-placeholder {\n      /* Firefox 19+ */\n      color: rgba(255, 255, 255, 0.6) !important; }\n\n.error-page .form-group input:-ms-input-placeholder {\n      color: rgba(255, 255, 255, 0.6) !important; }\n\n.error-page .form-content {\n    padding: 40px 0; }\n\n.error-page .user-avatar {\n    border-radius: 50%;\n    border: 2px solid #fff; }\n\n.error-page .user-avatar1 {\n    border-radius: 1%; }\n"

/***/ }),

/***/ "./src/app/access-denied/access-denied.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/access-denied/access-denied.component.ts ***!
  \**********************************************************/
/*! exports provided: AccessDeniedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessDeniedComponent", function() { return AccessDeniedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../router.animations */ "./src/app/router.animations.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AccessDeniedComponent = /** @class */ (function () {
    function AccessDeniedComponent(router) {
        this.router = router;
    }
    AccessDeniedComponent.prototype.ngOnInit = function () {
    };
    AccessDeniedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-access-denied',
            template: __webpack_require__(/*! ./access-denied.component.html */ "./src/app/access-denied/access-denied.component.html"),
            styles: [__webpack_require__(/*! ./access-denied.component.scss */ "./src/app/access-denied/access-denied.component.scss")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_2__["routerTransition"])()]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AccessDeniedComponent);
    return AccessDeniedComponent;
}());



/***/ }),

/***/ "./src/app/access-denied/access-denied.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/access-denied/access-denied.module.ts ***!
  \*******************************************************/
/*! exports provided: AccessDeniedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessDeniedModule", function() { return AccessDeniedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _access_denied_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./access-denied-routing.module */ "./src/app/access-denied/access-denied-routing.module.ts");
/* harmony import */ var _access_denied_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./access-denied.component */ "./src/app/access-denied/access-denied.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AccessDeniedModule = /** @class */ (function () {
    function AccessDeniedModule() {
    }
    AccessDeniedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _access_denied_routing_module__WEBPACK_IMPORTED_MODULE_2__["AccessDeniedRoutingModule"]
            ],
            declarations: [_access_denied_component__WEBPACK_IMPORTED_MODULE_3__["AccessDeniedComponent"]]
        })
    ], AccessDeniedModule);
    return AccessDeniedModule;
}());



/***/ })

}]);
//# sourceMappingURL=access-denied-access-denied-module.js.map