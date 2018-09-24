"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var newUser = /** @class */ (function () {
    function newUser(uuid, fname, lname, email, password, password2, company, phone, admin) {
        this.uuid = uuid;
        this.fname = fname;
        this.lname = lname;
        this.email = email;
        this.password = password;
        this.password2 = password2;
        this.company = company;
        this.phone = phone;
        this.admin = admin;
    }
    return newUser;
}());
exports.newUser = newUser;
//# sourceMappingURL=newUser.js.map