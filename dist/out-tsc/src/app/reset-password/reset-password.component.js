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
var router_animations_1 = require("../router.animations");
var reset_password_service_1 = require("../reset-password.service");
var router_1 = require("@angular/router");
var userPassword_1 = require("./userPassword");
var ResetPasswordComponent = /** @class */ (function () {
    function ResetPasswordComponent(router, resetService) {
        this.router = router;
        this.resetService = resetService;
        this.model = new userPassword_1.userPassword('', '', '', ''); //get form control
    }
    ResetPasswordComponent.prototype.ngOnInit = function () {
        var url_string = window.location.href; //window.location.href
        var url = new URL(url_string);
        this.email = url.searchParams.get("email");
        this.uuid = url.searchParams.get("uuid");
        console.log(this.uuid);
        if (!this.email && !this.uuid) {
            this.router.navigateByUrl('/error');
        }
    };
    ResetPasswordComponent.prototype.resetPassword = function (person) {
        var _this = this;
        person.uuid = this.uuid;
        person.email = this.email;
        this.resetService.reset(person)
            .subscribe(function (user) {
            // show an alert to tell the user if product was created or not
            console.log(user);
            // go back to list of products
            _this.myData = user;
            if (_this.myData.error) {
                _this.router.navigateByUrl('/error');
            }
            else if (_this.myData.user.admin == 0) {
                localStorage.setItem('isLoggedin', 'true');
                localStorage.setItem('fname', _this.myData.user.fname);
                localStorage.setItem('lname', _this.myData.user.lname);
                _this.router.navigateByUrl('/home');
            }
            else if (_this.myData.user.admin == 1) {
                localStorage.setItem('isLoggedin', 'true');
                localStorage.setItem('admin', 'true');
                localStorage.setItem('fname', _this.myData.user.fname);
                localStorage.setItem('lname', _this.myData.user.lname);
                _this.router.navigateByUrl('/dashboard');
            }
        }, function (error) { return console.log(error); });
    };
    ResetPasswordComponent = __decorate([
        core_1.Component({
            selector: 'app-reset-password',
            templateUrl: './reset-password.component.html',
            styleUrls: ['./reset-password.component.scss'],
            animations: [router_animations_1.routerTransition()]
        }),
        __metadata("design:paramtypes", [router_1.Router, reset_password_service_1.ResetPasswordService])
    ], ResetPasswordComponent);
    return ResetPasswordComponent;
}());
exports.ResetPasswordComponent = ResetPasswordComponent;
//# sourceMappingURL=reset-password.component.js.map