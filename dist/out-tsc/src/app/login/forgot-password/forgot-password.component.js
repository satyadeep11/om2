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
var forgot_service_1 = require("../forgot.service");
var ForgotPasswordComponent = /** @class */ (function () {
    function ForgotPasswordComponent(forgotService) {
        this.forgotService = forgotService;
        this.closed = false;
    }
    ForgotPasswordComponent.prototype.ngOnInit = function () {
    };
    ForgotPasswordComponent.prototype.userForgot = function (person) {
        var _this = this;
        this.closed = false;
        this.forgotService.forgot(person)
            .subscribe(function (user) {
            console.log(user);
            _this.myData = user;
        }, function (error) { return console.log(error); });
    };
    ForgotPasswordComponent = __decorate([
        core_1.Component({
            selector: 'app-forgot-password',
            templateUrl: './forgot-password.component.html',
            styleUrls: ['./forgot-password.component.scss']
        }),
        __metadata("design:paramtypes", [forgot_service_1.ForgotService])
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
}());
exports.ForgotPasswordComponent = ForgotPasswordComponent;
//# sourceMappingURL=forgot-password.component.js.map