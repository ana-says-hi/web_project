import { Person } from "./person";

export class Schueler extends Person {
  noten: number[];

  constructor(cnp: string, passwort: string,name: string) {
    super(cnp, passwort,name,"schueler");
    this.noten = [];
  }
}
