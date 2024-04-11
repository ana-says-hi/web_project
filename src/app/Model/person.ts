import { User } from "./user";

export class Person extends User{
    name:string;
    posittion:string;

    constructor(cnp: string, passwort: string,name: string, position: string) {
        super(cnp,passwort);
        this.name = name;
        this.posittion = position;
    }
}
