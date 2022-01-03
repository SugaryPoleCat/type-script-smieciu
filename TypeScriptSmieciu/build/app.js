"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const enums_1 = require("./enums");
const users_1 = require("./users");
const user1 = new users_1.UserAccount("Murph");
const user2 = new users_1.UserAccount("Damian", enums_1.UserPrivilage.Admin);
(0, users_1.UserPrint)(user1);
(0, users_1.UserPrint)(user2);
//# sourceMappingURL=app.js.map