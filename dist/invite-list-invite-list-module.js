(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["invite-list-invite-list-module"],{

/***/ "./src/app/layout/invite-list.service.ts":
/*!***********************************************!*\
  !*** ./src/app/layout/invite-list.service.ts ***!
  \***********************************************/
/*! exports provided: InviteListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InviteListService", function() { return InviteListService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InviteListService = /** @class */ (function () {
    function InviteListService(_http) {
        this._http = _http;
    }
    InviteListService.prototype.invitelist = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        return this._http.post("http://localhost/php_api/invite-list.php", options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    InviteListService.prototype.pendinglist = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        return this._http.post("http://localhost/php_api/invite-pending-list.php", options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    InviteListService.prototype.acceptedlist = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        return this._http.post("http://localhost/php_api/invite-accepted-list.php", options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    InviteListService.prototype.searchlist = function (email) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        return this._http.post("http://localhost/php_api/invite-single-user.php", email, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    InviteListService.prototype.deleteuser = function (customerid) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        headers.append('customerid', customerid.toString());
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        return this._http.post("http://localhost/php_api/delete-single-user.php", options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    InviteListService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], InviteListService);
    return InviteListService;
}());



/***/ }),

/***/ "./src/app/layout/invite-list/invite-list-routing.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/layout/invite-list/invite-list-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: InviteListRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InviteListRoutingModule", function() { return InviteListRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _invite_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./invite-list.component */ "./src/app/layout/invite-list/invite-list.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '', component: _invite_list_component__WEBPACK_IMPORTED_MODULE_2__["InviteListComponent"]
    }
];
var InviteListRoutingModule = /** @class */ (function () {
    function InviteListRoutingModule() {
    }
    InviteListRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], InviteListRoutingModule);
    return InviteListRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/invite-list/invite-list.component.html":
/*!***************************************************************!*\
  !*** ./src/app/layout/invite-list/invite-list.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"invite-list-page\" [@routerTransition]>\r\n<app-page-header [heading]=\"'Customer List'\" [icon]=\"'fa-search'\"></app-page-header>\r\n  <div class=\"row justify-content-md-center\">\r\n      <div class=\"col-md-5\"> \r\n      <div *ngIf=\"myData\">\r\n              <div *ngIf=\"myData.error==false; else inviteerror\">\r\n                    <div *ngIf=\"myData.success_msg; else messagecommon\">\r\n                      <ngb-alert type=\"success\" *ngIf=\"!closed\" (close)=\"closed=true\">{{myData.success_msg}}</ngb-alert>    \r\n                    </div>     \r\n                    <ng-template #messagecommon>\r\n                        <ngb-alert type=\"success\" *ngIf=\"!closed\" (close)=\"closed=true\">The Customer List has been generated.</ngb-alert>\r\n                    </ng-template>         \r\n              </div>\r\n              <ng-template #inviteerror>\r\n                      <ngb-alert type=\"danger\" *ngIf=\"!closed\" (close)=\"closed=true\">{{myData.error_msg}}</ngb-alert> \r\n              </ng-template>\r\n      </div>      \r\n  </div>\r\n  </div>\r\n \r\n  <div class=\"row justify-content-md-center\">\r\n    \r\n  <div class=\"col-md-7\">        \r\n        <div>  \r\n                <form class=\"form-inline\" #InviteSearch=\"ngForm\" (ngSubmit)=\"searchlist(InviteSearch.value); InviteSearch.reset() \" style=\"display: -webkit-inline-box;\">\r\n                    <input class=\"form-control\" name=\"email\" [(ngModel)]=\"email\" type=\"text\" placeholder=\"Search using Email\" >\r\n                </form> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br><br>\r\n                <button type=\"button\" class=\"btn btn-info\" (click)=\"inviteList()\">Full List</button>&nbsp;\r\n                <button type=\"button\" class=\"btn btn-info\" (click)=\"pendingList()\">Pending Invites</button>&nbsp;\r\n                <button type=\"button\" class=\"btn btn-info\" (click)=\"acceptedList()\">Accepted Customers</button>&nbsp;\r\n        </div>\r\n        <br> <h1 class=\"row justify-content-md-center\">Customer List</h1> <br>\r\n\r\n    <!-- HTML table for our list of product records -->\r\n    <table class='table table-hover table-responsive'>\r\n\r\n        <tr>\r\n            <th>First name</th>\r\n            <th>Last Name</th>\r\n            <th>Company Name</th>\r\n            <th>Phone Number</th>\r\n            <th>Email</th>\r\n            <th>Actions</th>\r\n        </tr>\r\n\r\n        <!-- Use *ngFor directive to loop throught our list of products. -->\r\n        <tr *ngFor=\"let user of myData?.users\">\r\n            <td>{{user.fname}}</td>\r\n            <td>{{user.lname}}</td>\r\n            <td>{{user.company}}</td>\r\n            <td>{{user.phone}}</td>\r\n            <td>{{user.email}}</td>  \r\n            <td id=\"actions_td\">\r\n                    <!-- edit customer button -->\r\n                    \r\n                    <button (click)=\"updateCustomer(user.unique_id)\" class='btn btn-info '>\r\n                         Edit Customer\r\n                    </button>&nbsp;\r\n \r\n                    <!-- delete customer button -->\r\n                    <button (click)=\"deleteCustomer(user.unique_id)\" class='btn btn-danger '>\r\n                       Delete\r\n                    </button>\r\n            </td>         \r\n        </tr>\r\n\r\n    </table>\r\n  </div>\r\n  </div>\r\n</div> \r\n\r\n"

/***/ }),

/***/ "./src/app/layout/invite-list/invite-list.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/layout/invite-list/invite-list.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#actions_td {\n  display: inline-flex; }\n"

/***/ }),

/***/ "./src/app/layout/invite-list/invite-list.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/layout/invite-list/invite-list.component.ts ***!
  \*************************************************************/
/*! exports provided: InviteListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InviteListComponent", function() { return InviteListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var _invite_list_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../invite-list.service */ "./src/app/layout/invite-list.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InviteListComponent = /** @class */ (function () {
    function InviteListComponent(router, inviteListService) {
        this.router = router;
        this.inviteListService = inviteListService;
        this.closed = false;
    }
    InviteListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.inviteListService.invitelist()
            .subscribe(function (user) {
            // show an alert to tell the user if user was invited
            console.log(user);
            _this.myData = user;
        }, function (error) { return console.log(error); });
    };
    InviteListComponent.prototype.acceptedList = function () {
        var _this = this;
        this.closed = false;
        this.inviteListService.acceptedlist()
            .subscribe(function (user) {
            // show an alert to tell the user if user was invited
            console.log(user);
            _this.myData = user;
        }, function (error) { return console.log(error); });
    };
    InviteListComponent.prototype.pendingList = function () {
        var _this = this;
        this.closed = false;
        this.inviteListService.pendinglist()
            .subscribe(function (user) {
            // show an alert to tell the user if user was invited
            console.log(user);
            _this.myData = user;
        }, function (error) { return console.log(error); });
    };
    InviteListComponent.prototype.inviteList = function () {
        var _this = this;
        this.closed = false;
        this.inviteListService.invitelist()
            .subscribe(function (user) {
            // show an alert to tell the user if user was invited
            console.log(user);
            _this.myData = user;
        }, function (error) { return console.log(error); });
    };
    InviteListComponent.prototype.searchlist = function (email) {
        var _this = this;
        this.closed = false;
        this.inviteListService.searchlist(email)
            .subscribe(function (user) {
            // show an alert to tell the user if user was invited
            console.log(user);
            _this.myData = user;
        }, function (error) { return console.log(error); });
    };
    InviteListComponent.prototype.deleteCustomer = function (customerid) {
        var _this = this;
        this.closed = false;
        this.inviteListService.deleteuser(customerid)
            .subscribe(function (user) {
            // show an alert to tell the user if user was invited
            console.log(user);
            _this.myData = user;
        }, function (error) { return console.log(error); });
    };
    InviteListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-invite-list',
            template: __webpack_require__(/*! ./invite-list.component.html */ "./src/app/layout/invite-list/invite-list.component.html"),
            styles: [__webpack_require__(/*! ./invite-list.component.scss */ "./src/app/layout/invite-list/invite-list.component.scss")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_2__["routerTransition"])()]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _invite_list_service__WEBPACK_IMPORTED_MODULE_3__["InviteListService"]])
    ], InviteListComponent);
    return InviteListComponent;
}());



/***/ }),

/***/ "./src/app/layout/invite-list/invite-list.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/layout/invite-list/invite-list.module.ts ***!
  \**********************************************************/
/*! exports provided: InviteListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InviteListModule", function() { return InviteListModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _invite_list_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./invite-list-routing.module */ "./src/app/layout/invite-list/invite-list-routing.module.ts");
/* harmony import */ var _invite_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./invite-list.component */ "./src/app/layout/invite-list/invite-list.component.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var InviteListModule = /** @class */ (function () {
    function InviteListModule() {
    }
    InviteListModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbCarouselModule"].forRoot(),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbAlertModule"].forRoot(),
                _invite_list_routing_module__WEBPACK_IMPORTED_MODULE_4__["InviteListRoutingModule"], _shared__WEBPACK_IMPORTED_MODULE_6__["PageHeaderModule"]],
            declarations: [_invite_list_component__WEBPACK_IMPORTED_MODULE_5__["InviteListComponent"]]
        })
    ], InviteListModule);
    return InviteListModule;
}());



/***/ })

}]);
//# sourceMappingURL=invite-list-invite-list-module.js.map