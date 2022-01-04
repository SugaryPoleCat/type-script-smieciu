import { IUser } from "./interfaces";
import { UserPrivilage } from "./enums";

let idCount: number = 0;

/**
 * The UserAccount base class.
 * */
export class UserAccount {
	name: string;
	_id: number;
	privilage?: string;

	/**
	 * The UserAccount constructor
	 * @param Name - String name of the person.
	 * @param Privilage - String privilage, based on the enums. OPTIONAL
	 */
	constructor( Name: string, Privilage?: string ) {
		idCount++;
		this.name = Name;
		this._id = idCount;

		// check if its undefined or nulled.
		if ( Privilage !== undefined || Privilage !== null ) {
			this.privilage = Privilage;
		} else {
			// if the Privilage is undefined or null, give it the User privilage.
			this.privilage = UserPrivilage.User;
		}
	}

	/**
	 * This will print the user. Its the same as UserPrint();
	 * @returns - the String
	 */
	print () {
		let reply: string = `${ this._id } | ${ this.name }`;
		if ( this.privilage !== undefined ) {
			reply += ` | ${ this.privilage }`;
		}
		return console.log( reply );
	}
}

/**
 * This prints the user. Its the same as UserAccount.print()
 * @param user - The user object.
 */
export function UserPrint ( user: IUser ) {
	let reply: string = `${ user._id } | ${ user.name }`;
	if ( user.privilage !== undefined ) {
		reply += ` | ${ user.privilage }`;
	}
	return console.log( reply );
}