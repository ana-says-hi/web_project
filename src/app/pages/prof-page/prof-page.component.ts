import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-prof-page',
  templateUrl: './prof-page.component.html',
  styleUrls: ['./prof-page.component.css']
})
export class ProfPageComponent{
  profForm= new FormGroup({users: this.fb.array([ this.createUser() ])});

  constructor(private fb: FormBuilder) { }

  // ngOnInit(): void {
  //   this.profForm = this.fb.group({
  //     users: this.fb.array([ this.createUser() ])
  //   });
  // }

  createUser(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
      cnp: ['', Validators.required],
      subject: ['', Validators.required],
      password: ['initial1234', Validators.required],
      grades: this.fb.array([])
    });
  }

  createGrade(): FormGroup {
    return this.fb.group({
      grade: ['', Validators.required]
    });
  }

  get users(): FormArray {
    return this.profForm.get('users') as FormArray;
  }

  addUser(): void {
    this.users.push(this.createUser());
  }

  removeUser(index: number): void {
    this.users.removeAt(index);
  }

  getGrades(userIndex: number): FormArray {
    return this.users.at(userIndex).get('grades') as FormArray;
  }

  addGrade(userIndex: number): void {
    this.getGrades(userIndex).push(this.createGrade());
  }

  removeGrade(userIndex: number, gradeIndex: number): void {
    this.getGrades(userIndex).removeAt(gradeIndex);
  }
}
