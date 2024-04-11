import { Component } from '@angular/core';
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { collection, getDocs, addDoc } from "firebase/firestore";
import {User} from "./Model/user";
import {Schueler} from "./Model/schueler";
import {Professor} from "./Model/proff";
import {BigBoss} from "./Model/big_boss";
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
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'projekt-web';
  // showList: boolean = false;
  // my_text: string = "I'm not crazy, my mother had me tested!";

  // constructor(private router: Router){
  //
  //  }

}
