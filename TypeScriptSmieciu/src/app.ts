/*
interface User {
    name: string;
    id: number;
}
*/

import { UserPrivilage, AnimalTypes } from "./enums";
import { UserAccount, UserPrint } from "./users";
import { Animal, AnimalPrint, Cat } from "./animal";

// create new users;
const user1 = new UserAccount( "Murph" );
const user2 = new UserAccount( "Damian", UserPrivilage.Admin );

UserPrint( user1 );
UserPrint( user2 );

user1.print();
user2.print();

const animal1 = new Animal( "Boob", AnimalTypes.Cow );
const animal2 = new Cat( "Boof", AnimalTypes.Cat );

AnimalPrint(animal1);
AnimalPrint(animal2);