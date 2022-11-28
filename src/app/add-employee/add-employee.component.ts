import { Component } from '@angular/core';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {

  name = ""
  designation = ""
  companyname = ""
  salary = ""

  readValue = () => {

   let data:any =  {"name" : this.name,"designation":this.designation,"companyname": this.companyname,"salary":this.salary}
   console.log(data)
  }


}
