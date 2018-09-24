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
var router_animations_1 = require("../router.animations");
var auth_service_1 = require("../auth.service");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, authService) {
        this.router = router;
        this.authService = authService;
        this.loadComponent = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem("isLoggedin")) {
            if (localStorage.getItem("admin")) {
                this.router.navigateByUrl('/dashboard');
            }
            else {
                this.router.navigateByUrl('/home');
            }
        }
    };
    LoginComponent.prototype.onLoggedin = function (email, password) {
        this.router.navigateByUrl('/access-denied'); //place login logic here
        //localStorage.setItem('isLoggedin', 'true');
        console.log(email);
    };
    LoginComponent.prototype.userLogin = function (person) {
        var _this = this;
        this.authService.login(person)
            .subscribe(function (user) {
            // show an alert to tell the user if product was created or not
            console.log(user);
            // go back to list of products
            _this.myData = user;
            if (_this.myData.error) {
                console.log("Login Error");
            }
            else if (_this.myData.user.Admin == 0) {
                localStorage.setItem('isLoggedin', 'true');
                localStorage.setItem('fname', _this.myData.user['First Name']);
                localStorage.setItem('lname', _this.myData.user['Last Name']);
                localStorage.setItem('uuid', _this.myData.uuid);
                _this.router.navigateByUrl('/home');
                //define user cart on login
                var user_1 = {};
                user_1.uuid = _this.myData.uuid;
                _this.authService.getCart(user_1)
                    .subscribe(function (user) {
                    console.log(user);
                    localStorage.setItem('currentCart', JSON.stringify(user));
                }, function (error) { return console.log(error); });
                if (!localStorage.getItem("visitedproducts")) {
                    localStorage.setItem('visitedproducts', '');
                }
            }
            else if (_this.myData.user.Admin == 1) {
                localStorage.setItem('isLoggedin', 'true');
                localStorage.setItem('admin', 'true');
                localStorage.setItem('fname', _this.myData.user['First Name']);
                localStorage.setItem('lname', _this.myData.user['Last Name']);
                localStorage.setItem('uuid', _this.myData.uuid);
                _this.router.navigateByUrl('/dashboard');
            }
        }, function (error) { return console.log(error); });
    };
    LoginComponent.prototype.forgotPassword = function () {
        if (this.loadComponent == true)
            this.loadComponent = false;
        else
            this.loadComponent = true;
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.scss'],
            animations: [router_animations_1.routerTransition()]
        }),
        __metadata("design:paramtypes", [router_1.Router,
            auth_service_1.AuthService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map