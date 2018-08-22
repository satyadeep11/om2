(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["signup-signup-module"],{

/***/ "./src/app/register.service.ts":
/*!*************************************!*\
  !*** ./src/app/register.service.ts ***!
  \*************************************/
/*! exports provided: RegisterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterService", function() { return RegisterService; });
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



var RegisterService = /** @class */ (function () {
    function RegisterService(_http) {
        this._http = _http;
    }
    RegisterService.prototype.register = function (person) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        return this._http.post("http://localhost/php_api/liveregister.php", person, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    RegisterService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], RegisterService);
    return RegisterService;
}());



/***/ }),

/***/ "./src/app/signup/newUser.ts":
/*!***********************************!*\
  !*** ./src/app/signup/newUser.ts ***!
  \***********************************/
/*! exports provided: newUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newUser", function() { return newUser; });
var newUser = /** @class */ (function () {
    function newUser(uuid, fname, lname, email, password, password2, company, phone, admin) {
        this.uuid = uuid;
        this.fname = fname;
        this.lname = lname;
        this.email = email;
        this.password = password;
        this.password2 = password2;
        this.company = company;
        this.phone = phone;
        this.admin = admin;
    }
    return newUser;
}());



/***/ }),

/***/ "./src/app/signup/signup-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/signup/signup-routing.module.ts ***!
  \*************************************************/
/*! exports provided: SignupRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupRoutingModule", function() { return SignupRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _signup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signup.component */ "./src/app/signup/signup.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '', component: _signup_component__WEBPACK_IMPORTED_MODULE_2__["SignupComponent"]
    }
];
var SignupRoutingModule = /** @class */ (function () {
    function SignupRoutingModule() {
    }
    SignupRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], SignupRoutingModule);
    return SignupRoutingModule;
}());



/***/ }),

/***/ "./src/app/signup/signup.component.html":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-page\" [@routerTransition]>\n\n        <div *ngIf=\"myData\">\n                <div *ngIf=\"myData.error==false; else loginerror\">\n                    <div *ngIf=\"myData.user.Admin==1; else regularUser\">\n                      <h2>Welcome Admin {{myData.user.fname}} {{myData.user.lname}}</h2>\n                    </div>\n                    <ng-template #regularUser>\n                      <h2>Welcome User {{myData.user.fname}} {{myData.user.lname}}</h2>\n                    </ng-template>\n                </div>\n                <ng-template #loginerror><h2>{{myData.error_msg}} </h2></ng-template>\n              </div>\n\n    <div class=\"row justify-content-md-center\">\n        <div class=\"col-md-4\">\n            <img class=\"user-avatar\" src=\"http://apparel.idw-quickselect.com/wp-content/uploads/sites/3/2017/06/Artboard-1.png\" width=\"250px\" class=\"user-avatar1\" />\n            <h1>Registration</h1>\n            <form #newuserForm=\"ngForm\"(ngSubmit)=\"userRegister(newuserForm.value)\" autocomplete=\"off\"> \n                <div class=\"form-content\">\n                    <div class=\"form-group\">\n                        <input name=\"fname\" [(ngModel)]=\"model.fname\" #signupfname=\"ngModel\" type=\"text\" class=\"form-control input-underline input-lg\" id=\"fname\" placeholder=\"First Name\" required>\n                    </div>                    \n                    <div *ngIf=\"signupfname.invalid && (signupfname.dirty || signupfname.touched)\" class=\"alert alert-danger\">   \n                            <div *ngIf=\"signupfname.errors.required\">First Name is required.</div> \n                    </div>\n                    <div class=\"form-group\">\n                        <input name=\"lname\" [(ngModel)]=\"model.lname\" #signuplname=\"ngModel\" type=\"text\" class=\"form-control input-underline input-lg\" id=\"lname\" placeholder=\"Last Name\" required>\n                    </div>\n                    <div *ngIf=\"signuplname.invalid && (signuplname.dirty || signuplname.touched)\" class=\"alert alert-danger\">   \n                            <div *ngIf=\"signuplname.errors.required\">Last Name is required.</div> \n                    </div>\n\n                    <div class=\"form-group\">\n                        <input name=\"company\" [(ngModel)]=\"model.company\" #signupcompany=\"ngModel\" type=\"text\" class=\"form-control input-underline input-lg\" id=\"company\" placeholder=\"Company Name\" required>\n                    </div>\n                    <div *ngIf=\"signupcompany.invalid && (signupcompany.dirty || signupcompany.touched)\" class=\"alert alert-danger\">   \n                            <div *ngIf=\"signupcompany.errors.required\">Company Name is required.</div> \n                    </div>\n\n                    <div class=\"form-group\">\n                            <input name=\"phone\" [(ngModel)]=\"model.phone\" #signupphone=\"ngModel\" type=\"text\" class=\"form-control input-underline input-lg\" id=\"phone\" placeholder=\"Phone\" required>\n                    </div>\n                    <div *ngIf=\"signupphone.invalid && (signupphone.dirty || signupphone.touched)\" class=\"alert alert-danger\">   \n                            <div *ngIf=\"signupphone.errors.required\">Company Name is required.</div> \n                    </div>\n\n                    <div class=\"form-group\">\n                        <input name=\"email\" [(ngModel)]=\"model.email\" type=\"text\" class=\"form-control input-underline input-lg\" id=\"email\" placeholder=\"Email\" readonly>\n                    </div>           \n\n\n                    <div ngModelGroup=\"password\" #userPassword=\"ngModelGroup\" required >\n                            <div class=\"form-group\">\n                              \n                              <input type=\"password\"\n                              [(ngModel)]=\"model.password\" name=\"password\" class=\"form-control input-underline input-lg\"\n                                id=\"inputPassword\" placeholder=\"Password\"\n                                minlength =\"8\" required>\n                            </div>\n                         \n                            <div class=\"form-group\">\n                              \n                              <input type=\"password\" class=\"form-control input-underline input-lg\"\n                              [(ngModel)]=\"model.password2\" name=\"password2\"\n                                id=\"confirmPassword\" placeholder=\"Confirm Password\">\n                            </div>\n                             \n                             \n                            <div *ngIf=\"(userPassword.invalid|| userPassword.value?.password != userPassword.value?.password2) && (userPassword.touched)\"\n                            class=\"alert alert-danger\">\n                             \n                            <div *ngIf = \"userPassword.invalid; else nomatch\">\n                                Password needs to be more than 8 characters\n                            </div>\n                                <ng-template #nomatch >\n                                Passwords don't match\n                                </ng-template>\n                            </div>\n                        </div>                            \n                </div>\n                <button class=\"btn rounded-btn\" type=\"submit\" [disabled]=\"!newuserForm.form.valid\"> Register </button>&nbsp;\n                <a class=\"btn rounded-btn\" [routerLink]=\"['/login']\"> Log in </a> \n            </form>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/signup/signup.component.scss":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block; }\n\n.login-page {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  overflow: auto;\n  background: #222;\n  text-align: center;\n  color: #fff;\n  padding: 3em; }\n\n.login-page .col-lg-4 {\n    padding: 0; }\n\n.login-page .input-lg {\n    height: 46px;\n    padding: 10px 16px;\n    font-size: 18px;\n    line-height: 1.3333333;\n    border-radius: 0; }\n\n.login-page .input-underline {\n    background: 0 0;\n    border: none;\n    box-shadow: none;\n    border-bottom: 2px solid rgba(255, 255, 255, 0.5);\n    color: #fff;\n    border-radius: 0; }\n\n.login-page .input-underline:focus {\n    border-bottom: 2px solid #fff;\n    box-shadow: none; }\n\n.login-page .rounded-btn {\n    border-radius: 50px;\n    color: rgba(255, 255, 255, 0.8);\n    background: #222;\n    border: 2px solid rgba(255, 255, 255, 0.8);\n    font-size: 18px;\n    line-height: 40px;\n    padding: 0 25px; }\n\n.login-page .rounded-btn:hover,\n  .login-page .rounded-btn:focus,\n  .login-page .rounded-btn:active,\n  .login-page .rounded-btn:visited {\n    color: white;\n    border: 2px solid white;\n    outline: none; }\n\n.login-page h1 {\n    font-weight: 300;\n    margin-top: 20px;\n    margin-bottom: 10px;\n    font-size: 36px; }\n\n.login-page h1 small {\n      color: rgba(255, 255, 255, 0.7); }\n\n.login-page .form-group {\n    padding: 8px 0; }\n\n.login-page .form-group input::-webkit-input-placeholder {\n      color: rgba(255, 255, 255, 0.6) !important; }\n\n.login-page .form-group input:-moz-placeholder {\n      /* Firefox 18- */\n      color: rgba(255, 255, 255, 0.6) !important; }\n\n.login-page .form-group input::-moz-placeholder {\n      /* Firefox 19+ */\n      color: rgba(255, 255, 255, 0.6) !important; }\n\n.login-page .form-group input:-ms-input-placeholder {\n      color: rgba(255, 255, 255, 0.6) !important; }\n\n.login-page .form-content {\n    padding: 40px 0; }\n\n.login-page .user-avatar {\n    border-radius: 50%;\n    border: 2px solid #fff; }\n\n.login-page .user-avatar1 {\n    border-radius: 1%; }\n"

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var _register_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../register.service */ "./src/app/register.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _newUser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./newUser */ "./src/app/signup/newUser.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SignupComponent = /** @class */ (function () {
    function SignupComponent(router, registerService) {
        this.router = router;
        this.registerService = registerService;
        // @Input() useremail: string = 'email';
        this.model = new _newUser__WEBPACK_IMPORTED_MODULE_4__["newUser"]('', '', '', '', '', '', '', '', 0); //get form control
    }
    SignupComponent.prototype.ngOnInit = function () {
        var url_string = window.location.href; //window.location.href
        var url = new URL(url_string);
        var email = url.searchParams.get("email");
        this.uuid = url.searchParams.get("uuid");
        console.log(this.uuid);
        if (email) {
            this.model = new _newUser__WEBPACK_IMPORTED_MODULE_4__["newUser"]('', '', '', email, '', '', '', '', 0);
        }
        else {
            this.router.navigateByUrl('/error');
        }
    };
    SignupComponent.prototype.userRegister = function (person) {
        var _this = this;
        person.admin = 0;
        person.uuid = this.uuid;
        this.registerService.register(person)
            .subscribe(function (user) {
            // show an alert to tell the user if product was created or not
            console.log(user);
            // go back to list of products
            _this.myData = user;
            if (_this.myData.error) {
                _this.router.navigateByUrl('/access-denied');
            }
            else if (_this.myData.user.admin == 0) {
                sessionStorage.setItem('isLoggedin', 'true');
                sessionStorage.setItem('fname', _this.myData.user.fname);
                sessionStorage.setItem('lname', _this.myData.user.lname);
                _this.router.navigateByUrl('/home');
            }
            else if (_this.myData.user.admin == 1) {
                sessionStorage.setItem('isLoggedin', 'true');
                sessionStorage.setItem('admin', 'true');
                sessionStorage.setItem('fname', _this.myData.user.fname);
                sessionStorage.setItem('lname', _this.myData.user.lname);
                _this.router.navigateByUrl('/dashboard');
            }
        }, function (error) { return console.log(error); });
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.scss */ "./src/app/signup/signup.component.scss")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_1__["routerTransition"])()]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _register_service__WEBPACK_IMPORTED_MODULE_2__["RegisterService"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/signup/signup.module.ts":
/*!*****************************************!*\
  !*** ./src/app/signup/signup.module.ts ***!
  \*****************************************/
/*! exports provided: SignupModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupModule", function() { return SignupModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _signup_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup-routing.module */ "./src/app/signup/signup-routing.module.ts");
/* harmony import */ var _signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var SignupModule = /** @class */ (function () {
    function SignupModule() {
    }
    SignupModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _signup_routing_module__WEBPACK_IMPORTED_MODULE_3__["SignupRoutingModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_5__["HttpModule"]
            ],
            declarations: [_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"]]
        })
    ], SignupModule);
    return SignupModule;
}());



/***/ })

}]);
//# sourceMappingURL=signup-signup-module.js.map