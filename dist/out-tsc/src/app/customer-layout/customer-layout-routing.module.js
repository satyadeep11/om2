"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var customer_layout_component_1 = require("./customer-layout.component");
var routes = [
    {
        path: '',
        component: customer_layout_component_1.CustomerLayoutComponent,
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'prefix' },
            { path: 'home', loadChildren: './home/home.module#HomeModule' },
            { path: 'products/:id', loadChildren: './products/products.module#ProductsModule' },
            { path: 'products', loadChildren: './products/products.module#ProductsModule' },
            { path: 'product-detail/:id', loadChildren: './product-detail/product-detail.module#ProductDetailModule' },
            { path: 'cart', loadChildren: './cart/cart.module#CartModule' },
            { path: 'checkout', loadChildren: './checkout/checkout.module#CheckoutModule' }
        ]
    }
];
var CustomerLayoutRoutingModule = /** @class */ (function () {
    function CustomerLayoutRoutingModule() {
    }
    CustomerLayoutRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], CustomerLayoutRoutingModule);
    return CustomerLayoutRoutingModule;
}());
exports.CustomerLayoutRoutingModule = CustomerLayoutRoutingModule;
//# sourceMappingURL=customer-layout-routing.module.js.map