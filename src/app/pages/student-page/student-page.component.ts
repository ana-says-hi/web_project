import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {collection, getDocs, getFirestore} from "firebase/firestore";
import {Schueler} from "../../Model/schueler";
import {db} from "../login-page/login-page.component";
import {initializeApp} from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCJNB8OuoAih0qNLJjBKO0Dwn7QK6GX61A",
  authDomain: "db-cat-9a50c.firebaseapp.com",
  projectId: "db-cat-9a50c",
  storageBucket: "db-cat-9a50c.appspot.com",
  messagingSenderId: "192710595871",
  appId: "1:192710595871:web:6343744fa3c3c8db5d8c2a",
  measurementId: "G-29STC4ETP2"
};


const app = initializeApp(firebaseConfig);


@Component({
  selector: 'app-student-page',
  templateUrl: './student-page.component.html',
  styleUrls: ['./student-page.component.css']
})
export class StudentPageComponent implements OnInit{
  cnp: string='';
  password: string='';
  docID: string='';
  name: string='';
  //grades: string[]=[];
  grades: [string, string][] = [];
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.cnp = params['cnp'];
      this.password = params['password'];
    });
    this.docID=this.getStudents();
    this.getGrades();
    // this.name=this.docID.data
  }

  getStudents(): any{
    let student: string = ''
    //let s: Schueler;
    const querySnapshot = getDocs(collection(db, "users/zYD5GFDYG1xv6uxgDEF0/students"));
    querySnapshot.then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        //console.log(${doc.id} => ${doc.data()['cnp']});
        if(doc.data()['CNP']==this.cnp){
          student = doc.id;
          this.name=doc.data()['Name'];
          //s=doc.data();
        }
      });
      return student;
    });
  }

  getGrades(): void{

    //let s: Schueler;
    const querySnapshot = getDocs(collection(db, "users/zYD5GFDYG1xv6uxgDEF0/students"));
    querySnapshot.then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        //console.log(${doc.id} => ${doc.data()['cnp']});
        if(doc.data()['CNP']==this.cnp){
          console.log(doc.id);
          const querySnapshot2 = getDocs(collection(db, `users/zYD5GFDYG1xv6uxgDEF0/students/${doc.id}/grades`));
          querySnapshot2.then((querySnapshot2) => {
            querySnapshot2.forEach((doc2) => {
              //console.log(${doc2.id} => ${doc2.data()['Grade']});
              this.grades.push([doc2.data()['Grade'], doc2.data()['Subject']]);
            });
          });
        }
      });

    });


  }
}
