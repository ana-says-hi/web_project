import {Component} from '@angular/core';
import {initializeApp} from "firebase/app";
import {collection, getDocs, getFirestore} from "firebase/firestore";
import {deleteDoc, doc, Firestore, query, where} from "@angular/fire/firestore";
import {FormControl, FormGroup, isFormControl} from "@angular/forms";
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
    selector: 'app-delete',
    templateUrl: './delete.component.html',
    styleUrls: ['./delete.component.css']
})
export class DeleteComponent {
    deletion: FormGroup = new FormGroup({
        cnp: new FormControl(''),
        position: new FormControl('')
    });

    constructor(private router: Router) {
    }

    deleteUser(userId: string) {

    }

    deleteStudent(studentId: string) {
        async function deleteDocumentByFieldValue(db: Firestore, collectionName: string, fieldName: string) {
            const q = query(collection(db, collectionName), where(fieldName, "==", studentId));

            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                //deleteDoc(doc(db, collectionName, doc.id));
            });
        }
    }

    deleteProf(profId: string) {
        async function getDocumentByFieldValue() {
            const q = query(collection(db, "/users/zYD5GFDYG1xv6uxgDEF0/professors"), where("cnp", "==", profId));
            const querySnapshot = await getDocs(q);
            deleteDoc(doc(db, "/users/zYD5GFDYG1xv6uxgDEF0/professors", querySnapshot.docs[0].id));
        }
        getDocumentByFieldValue();
    }

    goAway() {
        this.router.navigate(['../add']);
    }

}
