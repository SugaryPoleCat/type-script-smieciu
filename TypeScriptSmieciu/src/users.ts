import { User } from "./interfaces";
import { UserPrivilage } from "./enums";

let idCount: number = 0;

export class UserAccount {
    name: string;
    _id: number;
    privilage?: string;

    constructor(Name: string, Privilage?: string) {
        idCount++;
        this.name = Name;
        this._id = idCount;

        // check if its undefined or nulled.
        if (Privilage !== undefined || Privilage !== null) {
            this.privilage = Privilage;
        } else {
            // if the Privilage is undefined or null, give it the User privilage.
            this.privilage = UserPrivilage.User;
        }
    }
}

export function UserPrint(user: User) {
    let reply: string = `${user._id} | ${user.name}`;
    if (user.privilage !== undefined) {
        reply += ` | ${user.privilage}`;
    }
    return console.log(reply);
}