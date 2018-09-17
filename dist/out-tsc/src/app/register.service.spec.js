"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var register_service_1 = require("./register.service");
describe('RegisterService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [register_service_1.RegisterService]
        });
    });
    it('should be created', testing_1.inject([register_service_1.RegisterService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=register.service.spec.js.map