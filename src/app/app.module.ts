import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeeViewComponent } from './employee-view/employee-view.component';
import { EmployeeSearchComponent } from './employee-search/employee-search.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { EmployeeDeleteComponent } from './employee-delete/employee-delete.component';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';

const myRouter:Routes = [
  {
    path:"",
    component:AdminLoginComponent
  },
  {
    path:"add",
    component:AddEmployeeComponent
  },
  {
    path:"view",
    component:EmployeeViewComponent
  },
  { 
    path:"search",
    component:EmployeeSearchComponent
  },
  {
    path:"delete",
    component:EmployeeDeleteComponent
  },
  {
    path:"edit",
    component:EmployeeEditComponent
  }
]


@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    AddEmployeeComponent,
    EmployeeViewComponent,
    EmployeeSearchComponent,
    EmployeeEditComponent,
    EmployeeDeleteComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRouter)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
