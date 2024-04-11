import {Component, OnInit} from '@angular/core';
import {Schueler} from "../../Model/schueler";
import {addDoc, collection, getFirestore} from "firebase/firestore";
import {initializeApp} from "firebase/app";
import {Professor} from "../../Model/proff";
import {deleteDoc, doc} from "@angular/fire/firestore";
import {FormArray, FormBuilder, FormGroup, FormsModule, Validators} from "@angular/forms";
import {Router} from "@angular/router";
// import {db} from "../../app.module";

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css'],
})

export class AdminPageComponent implements OnInit {
  actions: string[] = ['Add', 'Delete', 'Display'];

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  performAction(action: string): void {
    console.log(`Performing action: ${action}`);
    this.router.navigate([action.toLowerCase()]);
  }
}
