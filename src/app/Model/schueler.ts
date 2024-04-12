import { Person } from "./person";

export class Schueler extends Person {
  noten: number[];

  constructor(cnp: string,passwort:string|"initial1234",name: string) {
    super(cnp, passwort,name,"schueler");
    this.noten = [];
  }

    addGrade(grade: number): void {
        this.noten.push(grade);
    }
}
