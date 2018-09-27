"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var GenderFilterPipe = /** @class */ (function () {
    function GenderFilterPipe() {
    }
    GenderFilterPipe.prototype.transform = function (items, searchText1, searchText2, searchText3) {
        if (!items)
            return [];
        searchText1 = searchText1.toLowerCase();
        searchText2 = searchText2.toLowerCase();
        searchText3 = searchText3.toLowerCase();
        // console.log(searchText1,searchText2,searchText3);
        return items.filter(function (it) {
            if (it.product.ProductName.toLowerCase().includes(searchText1) || it.product.ProductName.toLowerCase().includes(searchText2) || it.product.ProductName.toLowerCase().includes(searchText3)) {
                return it;
            }
        });
    };
    GenderFilterPipe = __decorate([
        core_1.Pipe({
            name: 'genderfilter'
        })
    ], GenderFilterPipe);
    return GenderFilterPipe;
}());
exports.GenderFilterPipe = GenderFilterPipe;
//# sourceMappingURL=genderfilter.pipe.js.map