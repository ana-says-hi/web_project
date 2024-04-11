import { Component } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {addDoc, collection, getFirestore} from "firebase/firestore";
import {deleteDoc, doc} from "@angular/fire/firestore";
import {initializeApp} from "firebase/app";
import {Router} from "@angular/router";

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
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  userForm: FormGroup = this.fb.group({
    users: this.fb.array([this.createUserGroup()])
  });

  constructor(private fb: FormBuilder, private router: Router) { }

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

  addUser(){
    if(this.userForm.value.users[0].position === 'student'){
      this.addStudent();
    } else {
      this.addProf();
    }
  }

  addStudent() {
    try {
      console.log(this.userForm.value.users[0].cnp);
      //var newStudent = new Schueler(this.new_cnp, this.new_password, this.new_name);
      const docRef = addDoc(collection(db, "/users/zYD5GFDYG1xv6uxgDEF0/students"), {
        Name: this.userForm.value.users[0].name,
        CNP: this.userForm.value.users[0].cnp,
        Password: "initial1234"
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
      //var newProf = new Professor(this.new_cnp, , this.new_name);
      const docRef = addDoc(collection(db, "/users/zYD5GFDYG1xv6uxgDEF0/professors"), {
        Name: this.userForm.value.users[0].name,
        CNP: this.userForm.value.users[0].cnp,
        Fach: this.userForm.value.users[0].subject,
        Password: "initial1234"
      });
      docRef.then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
      });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  goAway(){
    this.router.navigate(['../delete']);
  }

}
