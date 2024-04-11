import { Person } from "./person";

export class Professor extends Person{
  faecher:String[];

  constructor(cnp: string, passwort: string,name: string) {
    super(cnp,passwort,name, "professor");
    this.faecher = [];
  }

  addFaecher(fach:String){
    this.faecher.push(fach);
  }
}
