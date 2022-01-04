"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const enums_1 = require("./enums");
const users_1 = require("./users");
const animal_1 = require("./animal");
const user1 = new users_1.UserAccount("Murph");
const user2 = new users_1.UserAccount("Damian", enums_1.UserPrivilage.Admin);
(0, users_1.UserPrint)(user1);
(0, users_1.UserPrint)(user2);
user1.print();
user2.print();
const animal1 = new animal_1.Animal("Boob", enums_1.AnimalTypes.Cow);
const animal2 = new animal_1.Cat("Boof", enums_1.AnimalTypes.Cat);
(0, animal_1.AnimalPrint)(animal1);
(0, animal_1.AnimalPrint)(animal2);
//# sourceMappingURL=app.js.map