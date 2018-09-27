"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var BrandFilterPipe = /** @class */ (function () {
    function BrandFilterPipe() {
    }
    BrandFilterPipe.prototype.transform = function (items, searcharr) {
        if (!items)
            return [];
        if (!searcharr)
            return [];
        // console.log(searchText1,searchText2,searchText3);
        return items.filter(function (it) {
            if (items.some(function (r) { return searcharr.indexOf(r) >= 0; })) {
                return it;
            }
        });
    };
    BrandFilterPipe = __decorate([
        core_1.Pipe({
            name: 'brandfilter'
        })
    ], BrandFilterPipe);
    return BrandFilterPipe;
}());
exports.BrandFilterPipe = BrandFilterPipe;
//# sourceMappingURL=brandfilter.pipe.js.map