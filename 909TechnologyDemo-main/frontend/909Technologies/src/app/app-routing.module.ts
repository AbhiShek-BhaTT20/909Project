import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { HomeComponent } from './home/home.component';
import { EmployeeEditComponent } from './edit-employee/edit-employee.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'employeeform' ,component:EmployeeFormComponent},
  {path:'employeedetails',component:EmployeeDetailsComponent},
  { path:'update/empId',component:EmployeeFormComponent},
  {path:'home',component:HomeComponent},
  {path: 'edit/:id', component:EmployeeEditComponent},
  {path:'search',component:SearchComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
