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

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    AddEmployeeComponent,
    EmployeeViewComponent,
    EmployeeSearchComponent,
    EmployeeEditComponent,
    EmployeeDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
