"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var core_2 = require("@ngx-translate/core");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var customer_layout_routing_module_1 = require("./customer-layout-routing.module");
var customer_layout_component_1 = require("./customer-layout.component");
var header_component_1 = require("./components/header/header.component");
var menu_component_1 = require("./menu/menu.component");
var material_1 = require("@angular/material");
var menu_item_component_1 = require("./menu/menu-item/menu-item.component");
var footer_component_1 = require("./components/footer/footer.component");
var globalcart_1 = require("./globalcart");
var CustomerLayoutModule = /** @class */ (function () {
    function CustomerLayoutModule() {
    }
    CustomerLayoutModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                customer_layout_routing_module_1.CustomerLayoutRoutingModule,
                core_2.TranslateModule,
                material_1.MatInputModule,
                material_1.MatButtonModule,
                material_1.MatMenuModule,
                material_1.MatIconModule,
                material_1.MatToolbarModule,
                material_1.MatCardModule,
                ng_bootstrap_1.NgbModule.forRoot()
            ],
            declarations: [customer_layout_component_1.CustomerLayoutComponent, header_component_1.HeaderComponent, menu_component_1.MenuComponent, menu_item_component_1.MenuItemComponent, footer_component_1.FooterComponent],
            providers: [globalcart_1.GlobalCart]
        })
    ], CustomerLayoutModule);
    return CustomerLayoutModule;
}());
exports.CustomerLayoutModule = CustomerLayoutModule;
//# sourceMappingURL=customer-layout.module.js.map