"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var invite_list_service_1 = require("./invite-list.service");
describe('InviteListService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [invite_list_service_1.InviteListService]
        });
    });
    it('should be created', testing_1.inject([invite_list_service_1.InviteListService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=invite-list.service.spec.js.map