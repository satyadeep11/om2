"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var checkout_module_1 = require("./checkout.module");
describe('CheckoutModule', function () {
    var checkoutModule;
    beforeEach(function () {
        checkoutModule = new checkout_module_1.CheckoutModule();
    });
    it('should create an instance', function () {
        expect(checkoutModule).toBeTruthy();
    });
});
//# sourceMappingURL=checkout.module.spec.js.map