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
var invite_list_service_1 = require("../invite-list.service");
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
        core_1.Component({
            selector: 'app-invite-list',
            templateUrl: './invite-list.component.html',
            styleUrls: ['./invite-list.component.scss'],
            animations: [router_animations_1.routerTransition()]
        }),
        __metadata("design:paramtypes", [router_1.Router,
            invite_list_service_1.InviteListService])
    ], InviteListComponent);
    return InviteListComponent;
}());
exports.InviteListComponent = InviteListComponent;
//# sourceMappingURL=invite-list.component.js.map