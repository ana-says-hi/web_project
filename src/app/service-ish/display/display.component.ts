import {Component, OnInit} from '@angular/core';
import {initializeApp} from "firebase/app";
import {collection, getDocs, getFirestore} from "firebase/firestore";
import {Professor} from "../../Model/proff";
import {Schueler} from "../../Model/schueler";
import {doc} from "@angular/fire/firestore";
import {user} from "@angular/fire/auth";

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
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})

export class DisplayComponent{
  studentList: Schueler[] = [];
  teacherList: Professor[] = [];

  constructor() {
    this.getStudents();
    this.getTeachers();
  }

  getTeachers(){
    const querySnapshot = getDocs(collection(db, "users/zYD5GFDYG1xv6uxgDEF0/professors/"));
    querySnapshot.then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()['CNP']}`);
        var user = new Professor(doc.data()['CNP'],doc.data()['Password'], doc.data()['Name'], doc.data()['Fach']);
        this.teacherList.push(user);
      });
    });
  }

  getStudents(){
    const querySnapshot = getDocs(collection(db, "users/zYD5GFDYG1xv6uxgDEF0/students"));
    querySnapshot.then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()['CNP']}`);
        var user = new Schueler(doc.data()['CNP'],doc.data()['Password'], doc.data()['Name']);
        this.studentList.push(user);
      });
    });
  }

  ngOnInit(): void {
  }
}
