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
var register_service_1 = require("../register.service");
var router_1 = require("@angular/router");
var newUser_1 = require("./newUser");
var SignupComponent = /** @class */ (function () {
    function SignupComponent(router, registerService) {
        this.router = router;
        this.registerService = registerService;
        // @Input() useremail: string = 'email';
        this.model = new newUser_1.newUser('', '', '', '', '', '', '', '', 0); //get form control
    }
    SignupComponent.prototype.ngOnInit = function () {
        var url_string = window.location.href; //window.location.href
        var url = new URL(url_string);
        var email = url.searchParams.get("email");
        this.uuid = url.searchParams.get("uuid");
        console.log(this.uuid);
        if (email) {
            this.model = new newUser_1.newUser('', '', '', email, '', '', '', '', 0);
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
        core_1.Component({
            selector: 'app-signup',
            templateUrl: './signup.component.html',
            styleUrls: ['./signup.component.scss'],
            animations: [router_animations_1.routerTransition()]
        }),
        __metadata("design:paramtypes", [router_1.Router, register_service_1.RegisterService])
    ], SignupComponent);
    return SignupComponent;
}());
exports.SignupComponent = SignupComponent;
//# sourceMappingURL=signup.component.js.map