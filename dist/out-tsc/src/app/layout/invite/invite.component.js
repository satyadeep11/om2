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
var router_animations_1 = require("../../router.animations");
var invite_service_1 = require("../invite.service");
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
        person.inviteid = localStorage.getItem("uuid").toString();
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
            //   localStorage.setItem('isLoggedin', 'true');
            //   localStorage.setItem('fname', this.myData.user['First Name']);
            //   localStorage.setItem('lname', this.myData.user['Last Name']);
            //   this.router.navigateByUrl('/dashboard');
            // }     
        }, function (error) { return console.log(error); });
    };
    InviteComponent = __decorate([
        core_1.Component({
            selector: 'app-invite',
            templateUrl: './invite.component.html',
            styleUrls: ['./invite.component.scss'],
            animations: [router_animations_1.routerTransition()]
        }),
        __metadata("design:paramtypes", [router_1.Router,
            invite_service_1.InviteService])
    ], InviteComponent);
    return InviteComponent;
}());
exports.InviteComponent = InviteComponent;
//# sourceMappingURL=invite.component.js.map