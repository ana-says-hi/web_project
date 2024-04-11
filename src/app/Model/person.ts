import { User } from "./user";

export class Person extends User{
    name:string;
    vorname:string;
    birthdate:Date;
    posittion:String;

    constructor(cnp: string, passwort: string,name: string, vorname: string, birthdate: Date, position: string) {
        super(cnp,passwort);
        this.name = name;
        this.vorname = vorname;
        this.birthdate = birthdate;
        this.posittion = position;
    }
}
