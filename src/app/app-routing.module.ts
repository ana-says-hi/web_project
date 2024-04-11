import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminPageComponent} from "./pages/admin-page/admin-page.component";
import {LoginPageComponent} from "./pages/login-page/login-page.component";
import {ProfPageComponent} from "./pages/prof-page/prof-page.component";
import {StudentPageComponent} from "./pages/student-page/student-page.component";

const routes: Routes = [
  {path:'', component:LoginPageComponent},
  {path:'admin-page', component:AdminPageComponent},
  {path:'prof-page', component:ProfPageComponent},
  {path:'student-page', component:StudentPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
