"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var invite_service_1 = require("./invite.service");
describe('InviteService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [invite_service_1.InviteService]
        });
    });
    it('should be created', testing_1.inject([invite_service_1.InviteService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=invite.service.spec.js.map