import { Component } from '@angular/core';
import {Schueler} from "../../Model/schueler";
import {addDoc, collection, getFirestore} from "firebase/firestore";
import {initializeApp} from "firebase/app";
import {Professor} from "../../Model/proff";
import {deleteDoc, doc} from "@angular/fire/firestore";
import {FormArray, FormBuilder, FormGroup, FormsModule, Validators} from "@angular/forms";
// import {db} from "../../app.module";

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
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css'],
})
export class AdminPageComponent {
  new_cnp: string = "";
  new_password: string = "";
  new_name: string = "";

  userForm: FormGroup = this.fb.group({
    users: this.fb.array([this.createUserGroup()])
  });

  constructor(private fb: FormBuilder) { }

  // ngOnInit(): void {
  //   this.userForm = this.fb.group({
  //     users: this.fb.array([this.createUserGroup()])
  //   });
  // }

  get users(): FormArray {
    return this.userForm.get('users') as FormArray;
  }

  createUserGroup(): FormGroup {
    return this.fb.group({
      cnp: ['', Validators.required],
      name: ['', Validators.required],
      position: ['student', Validators.required], // Default to student
      subject: [''] // Only for teachers
    });
  }


  addStudent() {
    try {
      var newStudent = new Schueler(this.new_cnp, this.new_password, this.new_name);
      const docRef = addDoc(collection(db, "/users/zYD5GFDYG1xv6uxgDEF0/students"), {
        Name: newStudent.name,
        CNP: newStudent.cnp,
        Password: newStudent.passwort
      });
      docRef.then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
      });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  addProf() {
    try {
      var newProf = new Professor(this.new_cnp, this.new_password, this.new_name);
      const docRef = addDoc(collection(db, "/users/zYD5GFDYG1xv6uxgDEF0/professors"), {
        Name: newProf.name,
        CNP: newProf.cnp,
        Password: newProf.passwort
      });
      docRef.then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
      });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  deleteStudent(studentId: string) {
    try {
      const studentRef = doc(db, "/users/zYD5GFDYG1xv6uxgDEF0/students", studentId);
      deleteDoc(studentRef);
    } catch (e) {
      console.error("Error deleting document: ", e);
    }
  }

  deleteProf(profId:string) {
    try {
      const profRef = doc(db, "/users/zYD5GFDYG1xv6uxgDEF0/professors", profId);
      deleteDoc(profRef);
    } catch (e) {
      console.error("Error deleting document: ", e);
    }
  }
}
