import { Person } from "./person";

export class Professor extends Person{
  faecher:String[];

  constructor(cnp: string, passwort: string,name: string, vorname: string, birthdate: Date, position: string, faecher: string[]) {
    super(cnp,passwort,name, vorname, birthdate, position);
    this.faecher = faecher;
  }
}
