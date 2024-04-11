import { Person } from "./person";

export class Schueler extends Person {
  noten: number[];

  constructor(cnp: string, passwort: string,name: string, vorname: string, birthdate: Date, position: string,noten: number[]) {
    super(cnp, passwort,name, vorname, birthdate, position);
    this.noten = noten;
  }
}
