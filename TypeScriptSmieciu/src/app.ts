/*
interface User {
    name: string;
    id: number;
}
*/

import { UserPrivilage } from "./enums";
import { UserAccount, UserPrint } from "./users";

// create new users;
const user1 = new UserAccount("Murph");
const user2 = new UserAccount("Damian", UserPrivilage.Admin);

UserPrint(user1);
UserPrint(user2);