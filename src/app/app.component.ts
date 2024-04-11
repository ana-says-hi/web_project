import { Component } from '@angular/core';
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { Student } from './Model/student';
import {User} from "./Model/user";
import {Schueler} from "./Model/schueler";
import {Professor} from "./Model/proff";
import {BigBoss} from "./Model/big_boss";
import {doc} from "@angular/fire/firestore";


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
  adminList:BigBoss[]=[];

  CNP: string = "";
  password: string = "";

  constructor() {
    this.getAdmins();
    this.getTeachers();
    this.getStudents();
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
      if(this.adminList.find(x=>x.cnp==this.CNP && x.passwort==this.password)){
        console.log("Admin found");
        //user has admin role-> show admin page
      }
      if(this.teacherList.find(x=>x.cnp==this.CNP && x.passwort==this.password)){
        console.log("Teacher found");
        //user has teacher role-> show teacher page
      }
      if(this.studentList.find(x=>x.cnp==this.CNP && x.passwort==this.password)){
        console.log("Student found");
        //user has student role-> show student page
      }
    }
    catch(e){
      console.log("Failed the login attempt!");
    }

  }

  getAdmins(){
    const querySnapshot = getDocs(collection(db, "users/zYD5GFDYG1xv6uxgDEF0/admins"));
    querySnapshot.then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()['cnp']}`);
        var user = new BigBoss(doc.data()['cnp'], doc.data()['passwort']);
        this.adminList.push(user);
      });
    });
  }

  getTeachers(){
    const querySnapshot = getDocs(collection(db, "users/zYD5GFDYG1xv6uxgDEF0/teachers/"));
    querySnapshot.then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()['cnp']}`);
        var user = new Professor(doc.data()['cnp'], doc.data()['passwort'], doc.data()['name']);
        this.teacherList.push(user);
      });
    });
  }

  getStudents(){
    const querySnapshot = getDocs(collection(db, "users/zYD5GFDYG1xv6uxgDEF0/students"));
    querySnapshot.then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()['cnp']}`);
        var user = new Schueler(doc.data()['cnp'], doc.data()['passwort'], doc.data()['name']);
        this.studentList.push(user);
      });
    });
  }
}
