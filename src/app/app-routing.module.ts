import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminPageComponent} from "./pages/admin-page/admin-page.component";
import {LoginPageComponent} from "./pages/login-page/login-page.component";
import {ProfPageComponent} from "./pages/prof-page/prof-page.component";
import {StudentPageComponent} from "./pages/student-page/student-page.component";
import {AddComponent} from "./service-ish/add/add.component";
import {DeleteComponent} from "./service-ish/delete/delete.component";

const routes: Routes = [
  {path:'', component:LoginPageComponent},
  {path:'admin-page', component:AdminPageComponent},
  {path:'prof-page', component:ProfPageComponent},
  {path:'student-page', component:StudentPageComponent},
  {path:'add',component:AddComponent},
  {path:'delete',component:DeleteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
