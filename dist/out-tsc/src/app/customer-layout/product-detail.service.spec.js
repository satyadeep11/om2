"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var product_detail_service_1 = require("./product-detail.service");
describe('ProductDetailService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [product_detail_service_1.ProductDetailService]
        });
    });
    it('should be created', testing_1.inject([product_detail_service_1.ProductDetailService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=product-detail.service.spec.js.map