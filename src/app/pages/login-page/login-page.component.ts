import { Component } from '@angular/core';
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { collection, getDocs, addDoc } from "firebase/firestore";
import {User} from "../../Model/user";
import {Schueler} from "../../Model/schueler";
import {Professor} from "../../Model/proff";
import {BigBoss} from "../../Model/big_boss";
import { Router } from '@angular/router';
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
export const db = getFirestore(app);

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})


export class LoginPageComponent {

  //title = 'projekt-web';
  // showList: boolean = false;
  // my_text: string = "I'm not crazy, my mother had me tested!";

  teacherList: Professor[] = [];
  studentList: Schueler[] = [];
  adminList:BigBoss[]=[];

  CNP: string = "";
  passwort: string = "";

  constructor(private router: Router){
    this.getAdmins();
    this.getTeachers();
    this.getStudents();
  }

  //search thru the DB for the user and log him in
  loginUser(){
    console.log('Login attempt');
    try{
      console.log(this.adminList);
      if(this.adminList.find(x=>x.cnp==this.CNP && x.passwort==this.passwort)){
        console.log('Admin found');
        //user has admin role-> show admin page
        this.router.navigate(['/admin-page']);
      }
     else if(this.teacherList.find(x=>x.cnp==this.CNP && x.passwort==this.passwort)){
        console.log('Teacher found');
        //user has teacher role-> show teacher page
        this.router.navigate(['/teacher-page']);
      }
     else if(this.studentList.find(x=>x.cnp==this.CNP && x.passwort==this.passwort)){
        console.log('Student found');
        //let s=this.studentList.find(x=>x.cnp==this.CNP);
        this.router.navigate(['/student-page'], { queryParams: { cnp:this.CNP, passwort: this.passwort} });
     }
    }
    catch(e){
      console.log('Failed the login attempt!');
    }
  }

  getAdmins(){
    const querySnapshot = getDocs(collection(db, "users/zYD5GFDYG1xv6uxgDEF0/admins/"));
    querySnapshot.then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        //console.log(${doc.id} => ${doc.data()['cnp']});
        var user = new BigBoss(doc.data()['cnp'], doc.data()['passwort']);
        this.adminList.push(user);
      });
    });
  }

  getTeachers(){
    const querySnapshot = getDocs(collection(db, "users/zYD5GFDYG1xv6uxgDEF0/professors/"));
    querySnapshot.then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        //console.log(${doc.id} => ${doc.data()['cnp']});
        var user = new Professor(doc.data()['CNP'],doc.data()['Password'], doc.data()['Name'], doc.data()['Fach']);
        this.teacherList.push(user);
      });
    });
  }

  getStudents(){
    const querySnapshot = getDocs(collection(db, "users/zYD5GFDYG1xv6uxgDEF0/students"));
    querySnapshot.then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        //console.log(${doc.id} => ${doc.data()['cnp']});
        var user = new Schueler(doc.data()['CNP'],doc.data()['Password'], doc.data()['Name']);
        this.studentList.push(user);
      });
    });
  }
}
