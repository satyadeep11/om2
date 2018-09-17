"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var forgot_service_1 = require("./forgot.service");
describe('ForgotService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [forgot_service_1.ForgotService]
        });
    });
    it('should be created', testing_1.inject([forgot_service_1.ForgotService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=forgot.service.spec.js.map