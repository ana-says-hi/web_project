import { Person } from "./person";

export class Professor extends Person{
  fach:string;

  constructor(cnp: string, password:string | "initial1234",name: string, fach: string) {
    super(cnp,password,name, "professor");
    this.fach = fach;
  }


  // addFaecher(fach:String){
  //   this.faecher.push(fach);
  // }
}
