/*
interface User {
    name: string;
    id: number;
}
*/
import { User } from "./interfaces";
import { UserPrivilage } from "./enums";
class UserAccount {
    name;
    _id;
    privilage?;

    constructor(name: string, id: number, privilage?: string) {
        this.name = name;
        this._id = id;
        if (privilage !== undefined || privilage !== null) {
            this.privilage = privilage;
        } else {
            this.privilage = UserPrivilage.User;
        }
    }
}


const murph: User = new UserAccount("Murphy", 2);
const damia: User = new UserAccount("Damian", 1, UserPrivilage.Admin);


function printUser(user: User) {
    let reply: string = `${user.name} | ${user._id}`;

    if (user.privilage !== undefined) {
        reply += ` | ${user.privilage}`;
    }
    return console.log(reply);
}

printUser(murph);
printUser(damia);