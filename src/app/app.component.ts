import { Component } from '@angular/core';
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { Student } from './Model/student';
import {User} from "./Model/user";
import {Schueler} from "./Model/schueler";
import {Professor} from "./Model/proff";


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
const db = getFirestore(app);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'projekt-web';
  // showList: boolean = false;
  //
  // my_text: string = "I'm not crazy, my mother had me tested!";

  characters: string[] = ["Sheldon", "Leonard", "Penny", "Howard", "Raj"];

  teacherList: Professor[] = [];
  studentList: Schueler[] = [];
  userList:User[]=[];




  constructor() {
    this.getUsers();
   }

  // addStudent(){
  //   try {
  //     var newStudent = new Student(this.studentName, this.studentAge);
  //     const docRef = addDoc(collection(db, "Students"), {
  //       Name: newStudent.name,
  //       Age: newStudent.age
  //     });
  //     docRef.then((docRef) => {
  //       console.log("Document written with ID: ", docRef.id);
  //     });
  //   } catch (e) {
  //     console.error("Error adding document: ", e);
  //   }
  // }

  //search thru the DB for the user and log him in
  loginUser(){
    try{
      if(this.userList.find(user => user.cnp == '1234' && user.passwort == 'pass')){
        console.log("Admin found");
        //user has admin role-> show admin page
      }
    }
    catch(e){

    }
    console.log("Login user");
  }

  getUsers(){
    const querySnapshot = getDocs(collection(db, "users"));
    querySnapshot.then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()['cnp']}`);
        var user = new User(doc.data()['cnp'], doc.data()['passwort']);
        this.userList.push(user);
      });
    });
  }
}
