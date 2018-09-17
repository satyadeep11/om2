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
var http_1 = require("@angular/http");
var operators_1 = require("rxjs/operators");
var InviteListService = /** @class */ (function () {
    function InviteListService(_http) {
        this._http = _http;
    }
    InviteListService.prototype.invitelist = function () {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this._http.post("http://localhost/php_api/invite-list.php", options).pipe(operators_1.map(function (res) { return res.json(); }));
    };
    InviteListService.prototype.pendinglist = function () {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this._http.post("http://localhost/php_api/invite-pending-list.php", options).pipe(operators_1.map(function (res) { return res.json(); }));
    };
    InviteListService.prototype.acceptedlist = function () {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this._http.post("http://localhost/php_api/invite-accepted-list.php", options).pipe(operators_1.map(function (res) { return res.json(); }));
    };
    InviteListService.prototype.searchlist = function (email) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this._http.post("http://localhost/php_api/invite-single-user.php", email, options).pipe(operators_1.map(function (res) { return res.json(); }));
    };
    InviteListService.prototype.deleteuser = function (customerid) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        headers.append('customerid', customerid.toString());
        var options = new http_1.RequestOptions({ headers: headers });
        return this._http.post("http://localhost/php_api/delete-single-user.php", options).pipe(operators_1.map(function (res) { return res.json(); }));
    };
    InviteListService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [http_1.Http])
    ], InviteListService);
    return InviteListService;
}());
exports.InviteListService = InviteListService;
//# sourceMappingURL=invite-list.service.js.map