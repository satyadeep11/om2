(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["invite-invite-module"],{

/***/ "./src/app/layout/invite.service.ts":
/*!******************************************!*\
  !*** ./src/app/layout/invite.service.ts ***!
  \******************************************/
/*! exports provided: InviteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InviteService", function() { return InviteService; });
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



var InviteService = /** @class */ (function () {
    function InviteService(_http) {
        this._http = _http;
    }
    InviteService.prototype.invite = function (person) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        return this._http.post("http://localhost/php_api/invite.php", person, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    InviteService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], InviteService);
    return InviteService;
}());



/***/ }),

/***/ "./src/app/layout/invite/invite-routing.module.ts":
/*!********************************************************!*\
  !*** ./src/app/layout/invite/invite-routing.module.ts ***!
  \********************************************************/
/*! exports provided: InviteRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InviteRoutingModule", function() { return InviteRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _invite_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./invite.component */ "./src/app/layout/invite/invite.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '', component: _invite_component__WEBPACK_IMPORTED_MODULE_2__["InviteComponent"]
    }
];
var InviteRoutingModule = /** @class */ (function () {
    function InviteRoutingModule() {
    }
    InviteRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], InviteRoutingModule);
    return InviteRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/invite/invite.component.html":
/*!*****************************************************!*\
  !*** ./src/app/layout/invite/invite.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"invite-page\" [@routerTransition]>\n        <app-page-header [heading]=\"'Invite'\" [icon]=\"'fa-envelope'\"></app-page-header>\n    <div class=\"row justify-content-md-center\">\n        <div class=\"col-md-4\"> \n        <div *ngIf=\"myData\">\n                <div *ngIf=\"myData.error==false; else inviteerror\">\n                        <ngb-alert type=\"success\" *ngIf=\"!closed\" (close)=\"closed=true\">The Customer has been Invited.</ngb-alert>                  \n                </div>\n                <ng-template #inviteerror>\n                        <ngb-alert type=\"danger\" *ngIf=\"!closed\" (close)=\"closed=true\">{{myData.error_msg}}</ngb-alert> \n                </ng-template>\n        </div>\n        \n    </div>\n  </div>\n<div class=\"row justify-content-md-center\">\n    <div class=\"col-md-4\">        \n        <h1>Invite Customer</h1><br>\n        <form #InviteForm=\"ngForm\" (ngSubmit)=\"userInvite(InviteForm.value); InviteForm.reset() \">   \n            <div class=\"form-content\">\n                <div class=\"form-group\">\n                    <input name=\"email\" email #invitemail=\"ngModel\" [(ngModel)]=\"email\" class=\"form-control input-underline input-lg\" id=\"email\" placeholder=\"Email\" required>\n                </div>   \n                <div *ngIf=\"invitemail.invalid && (invitemail.dirty || invitemail.touched)\" class=\"alert alert-danger\">   \n                <div *ngIf=\"invitemail.errors.required\">Email is required.</div>    \n                <div *ngIf=\"invitemail.errors.email\">Email is not valid.</div>   \n                </div>  \n            </div>\n            <button class=\"btn btn-success\" type=\"submit\" [disabled]=\"!InviteForm.form.valid\"> Invite </button>          \n        </form>\n    </div>\n</div>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/layout/invite/invite.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/layout/invite/invite.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/invite/invite.component.ts":
/*!***************************************************!*\
  !*** ./src/app/layout/invite/invite.component.ts ***!
  \***************************************************/
/*! exports provided: InviteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InviteComponent", function() { return InviteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var _invite_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../invite.service */ "./src/app/layout/invite.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InviteComponent = /** @class */ (function () {
    function InviteComponent(router, inviteService) {
        this.router = router;
        this.inviteService = inviteService;
        this.closed = false;
    }
    InviteComponent.prototype.ngOnInit = function () { };
    InviteComponent.prototype.userInvite = function (person) {
        var _this = this;
        this.closed = false;
        person.inviteid = sessionStorage.getItem("uuid").toString();
        ;
        this.inviteService.invite(person)
            .subscribe(function (user) {
            // show an alert to tell the user if user was invited
            console.log(user);
            // go back to list of products
            _this.myData = user;
            // if(this.myData.error){
            //   this.router.navigateByUrl('/error');
            // }
            // else if(this.myData.user.Admin==0){
            //   sessionStorage.setItem('isLoggedin', 'true');
            //   sessionStorage.setItem('fname', this.myData.user['First Name']);
            //   sessionStorage.setItem('lname', this.myData.user['Last Name']);
            //   this.router.navigateByUrl('/dashboard');
            // }     
        }, function (error) { return console.log(error); });
    };
    InviteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-invite',
            template: __webpack_require__(/*! ./invite.component.html */ "./src/app/layout/invite/invite.component.html"),
            styles: [__webpack_require__(/*! ./invite.component.scss */ "./src/app/layout/invite/invite.component.scss")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_2__["routerTransition"])()]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _invite_service__WEBPACK_IMPORTED_MODULE_3__["InviteService"]])
    ], InviteComponent);
    return InviteComponent;
}());



/***/ }),

/***/ "./src/app/layout/invite/invite.module.ts":
/*!************************************************!*\
  !*** ./src/app/layout/invite/invite.module.ts ***!
  \************************************************/
/*! exports provided: InviteModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InviteModule", function() { return InviteModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _invite_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./invite-routing.module */ "./src/app/layout/invite/invite-routing.module.ts");
/* harmony import */ var _invite_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./invite.component */ "./src/app/layout/invite/invite.component.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var InviteModule = /** @class */ (function () {
    function InviteModule() {
    }
    InviteModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbCarouselModule"].forRoot(),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbAlertModule"].forRoot(),
                _invite_routing_module__WEBPACK_IMPORTED_MODULE_4__["InviteRoutingModule"], _shared__WEBPACK_IMPORTED_MODULE_6__["PageHeaderModule"]],
            declarations: [_invite_component__WEBPACK_IMPORTED_MODULE_5__["InviteComponent"]]
        })
    ], InviteModule);
    return InviteModule;
}());



/***/ })

}]);
//# sourceMappingURL=invite-invite-module.js.map