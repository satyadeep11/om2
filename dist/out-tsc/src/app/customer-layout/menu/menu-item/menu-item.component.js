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
var MenuItemComponent = /** @class */ (function () {
    function MenuItemComponent(router) {
        this.router = router;
    }
    MenuItemComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], MenuItemComponent.prototype, "items", void 0);
    __decorate([
        core_1.ViewChild('childMenu'),
        __metadata("design:type", Object)
    ], MenuItemComponent.prototype, "childMenu", void 0);
    MenuItemComponent = __decorate([
        core_1.Component({
            selector: 'app-menu-item',
            templateUrl: './menu-item.component.html',
            styleUrls: ['./menu-item.component.scss']
        }),
        __metadata("design:paramtypes", [router_1.Router])
    ], MenuItemComponent);
    return MenuItemComponent;
}());
exports.MenuItemComponent = MenuItemComponent;
//# sourceMappingURL=menu-item.component.js.map