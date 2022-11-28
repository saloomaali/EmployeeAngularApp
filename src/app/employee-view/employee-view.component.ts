import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-view',
  templateUrl: './employee-view.component.html',
  styleUrls: ['./employee-view.component.css']
})
export class EmployeeViewComponent {

  Employee:any = [
    {"name":"shana",

"designation":"Trainee",

"salary":12546777,

"phonenumber":435634456,

"companyname":"ast"

},

{"name":"asha",

"designation":"Trainee",

"salary":23457,

"phonenumber":6756332,

"companyname":"anest"

},

{"name":"james",

"designation":"Trainee",

"salary":987637,

"phonenumber":435634456,

"companyname":"ibs"

},

{"name":"alice",

"designation":"Developer",

"salary":35467,

"phonenumber":8999282666,

"companyname":"df"

},

{"name":"sam",

"designation":"Trainee",

"salary":657899,

"phonenumber":235617901,

"companyname":"ast"

}
  ]
}
