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
var material_1 = require("@angular/material");
var MenuComponent = /** @class */ (function () {
    function MenuComponent(router) {
        this.router = router;
        this.version = material_1.VERSION;
        this.navItems = [{ "CategoryID": "835", "displayName": "Apparel", "CategoryParent": "0", "CategoryOrder": "1", "iconName": "group", "route": "products\/835", "children": [{ "CategoryID": "844", "displayName": "Performance Polo Shirts", "CategoryParent": "835", "CategoryOrder": "2", "iconName": "whatshot", "route": "products\/844", "children": [] }, { "CategoryID": "845", "displayName": "Cotton\/Blended Polos", "CategoryParent": "835", "CategoryOrder": "3", "iconName": "whatshot", "route": "products\/845", "children": [] }, { "CategoryID": "846", "displayName": "Woven Shirts", "CategoryParent": "835", "CategoryOrder": "4", "iconName": "whatshot", "route": "products\/846", "children": [] }, { "CategoryID": "847", "displayName": "Fashion Shirts", "CategoryParent": "835", "CategoryOrder": "5", "iconName": "whatshot", "route": "products\/847", "children": [] }, { "CategoryID": "848", "displayName": "Sweatshirts", "CategoryParent": "835", "CategoryOrder": "6", "iconName": "whatshot", "route": "products\/848", "children": [] }, { "CategoryID": "849", "displayName": "Overknits\/Pullovers", "CategoryParent": "835", "CategoryOrder": "7", "iconName": "whatshot", "route": "products\/849", "children": [] }, { "CategoryID": "850", "displayName": "Sweaters and Fleece", "CategoryParent": "835", "CategoryOrder": "8", "iconName": "whatshot", "route": "products\/850", "children": [] }, { "CategoryID": "851", "displayName": "Outerwear", "CategoryParent": "835", "CategoryOrder": "9", "iconName": "whatshot", "route": "products\/851", "children": [] }] }, { "CategoryID": "836", "displayName": "Hardgoods", "CategoryParent": "0", "CategoryOrder": "2", "iconName": "group", "route": "products\/836", "children": [{ "CategoryID": "838", "displayName": "Drinkware", "CategoryParent": "836", "CategoryOrder": "1", "iconName": "event_seat", "route": "products\/838", "children": [] }, { "CategoryID": "839", "displayName": "Other", "CategoryParent": "836", "CategoryOrder": "2", "iconName": "event_seat", "route": "products\/839", "children": [] }, { "CategoryID": "858", "displayName": "Tech Accessories", "CategoryParent": "836", "CategoryOrder": "4", "iconName": "event_seat", "route": "products\/858", "children": [] }, { "CategoryID": "859", "displayName": "Journals and Notebooks", "CategoryParent": "836", "CategoryOrder": "5", "iconName": "event_seat", "route": "products\/859", "children": [] }, { "CategoryID": "860", "displayName": "Writing Instruments", "CategoryParent": "836", "CategoryOrder": "6", "iconName": "event_seat", "route": "products\/860", "children": [] }, { "CategoryID": "861", "displayName": "Outdoor Products", "CategoryParent": "836", "CategoryOrder": "7", "iconName": "event_seat", "route": "products\/861", "children": [] }, { "CategoryID": "862", "displayName": "Home and Wellness", "CategoryParent": "836", "CategoryOrder": "8", "iconName": "event_seat", "route": "products\/862", "children": [] }] }, { "CategoryID": "852", "displayName": "Accessories", "CategoryParent": "0", "CategoryOrder": "3", "iconName": "group", "route": "products\/852", "children": [{ "CategoryID": "853", "displayName": "Headwear", "CategoryParent": "852", "CategoryOrder": "1", "iconName": "gesture", "route": "products\/853", "children": [] }, { "CategoryID": "854", "displayName": "Backpacks", "CategoryParent": "852", "CategoryOrder": "2", "iconName": "gesture", "route": "products\/854", "children": [] }, { "CategoryID": "855", "displayName": "Totes and Bags", "CategoryParent": "852", "CategoryOrder": "3", "iconName": "gesture", "route": "products\/855", "children": [] }, { "CategoryID": "856", "displayName": "Blankets", "CategoryParent": "852", "CategoryOrder": "4", "iconName": "gesture", "route": "products\/856", "children": [] }] }];
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent = __decorate([
        core_1.Component({
            selector: 'app-menu',
            templateUrl: './menu.component.html',
            styleUrls: ['./menu.component.scss']
        }),
        __metadata("design:paramtypes", [router_1.Router])
    ], MenuComponent);
    return MenuComponent;
}());
exports.MenuComponent = MenuComponent;
//# sourceMappingURL=menu.component.js.map