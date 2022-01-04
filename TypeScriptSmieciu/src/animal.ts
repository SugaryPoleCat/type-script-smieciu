import { AnimalTypes } from "./enums";
import { IAnimal } from "./interfaces";

let id: number = 0;

export class Animal {
	name: string;
	_id: number;
	type: string;
	constructor(Name: string, Type: string) {
		id++;
		this.name = Name;
		this._id = id;
		this.type = Type;
	}
}

export class Cat extends Animal {
	eyes: string = "Slanted";
	constructor(Name: string, Type: string) {
		// when calling super, you dont need to redo this.name = name
		super(Name, Type);
	}
}

export function AnimalPrint (animal: IAnimal) {
	let reply: string = `${animal._id} | ${animal.name} | ${animal.type}`;
	if (animal.eyes !== undefined) {
		reply += ` | ${animal.eyes}`;
	}
	return console.log(reply);
}
