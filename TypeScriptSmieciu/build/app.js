"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const enums_1 = require("./enums");
class UserAccount {
    constructor(name, id, privilage) {
        this.name = name;
        this._id = id;
        if (privilage !== undefined || privilage !== null) {
            this.privilage = privilage;
        }
        else {
            this.privilage = enums_1.UserPrivilage.User;
        }
    }
}
const murph = new UserAccount("Murphy", 2);
const damia = new UserAccount("Damian", 1, enums_1.UserPrivilage.Admin);
function printUser(user) {
    let reply = `${user.name} | ${user._id}`;
    if (user.privilage !== undefined) {
        reply += ` | ${user.privilage}`;
    }
    return console.log(reply);
}
printUser(murph);
printUser(damia);
//# sourceMappingURL=app.js.map