import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeDetailsService } from './employee-details.service';
import { Router } from '@angular/router';
import { EmployeeFromService } from '../employee-form/employee-from.service';
import { Subscription } from 'rxjs';
//import { EmployeeFormComponent } from '../employee-form/employee-form.component';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  showUpdate : boolean = true;
  showAddEmployee : boolean=true;
  employee!:Employee;
  errorMessage:String="";
  successMessage:String="";
  details!:any[];
  constructor(private router:Router,private service:EmployeeDetailsService,private service1:EmployeeFromService){
  
  }
 
   

  ngOnInit(): void {
    this.employee = new Employee();
    this.seeDetails();
  }
  seeDetails(){
    this.service.getOrders(this.employee).subscribe(
    success=>this.details=success,
    error=>this.errorMessage=error,
    //this.router.navigate(["/employeeform"]);
  )

 

  }
  editDetails(employee:Employee){
   //this.employeeForm.flag=1
   console.log(employee.id)
    this.router.navigate(['/edit', employee.id]);

   
  }
  // editDetails1(employee:Employee){
  //   this.service.editDetails(employee).subscribe(
  //     success=>this.successMessage=success,
  //     error=>this.errorMessage=error,
  //   )
  //   this.employeeForm.flag=0;
  // }

  deleteDetails(employee:Employee) {
    console.log(employee)
    this.service.deleteDetails(employee).subscribe(
      success=>this.successMessage=success,
      error=>this.errorMessage=error    
    );
    window.location.reload();
  }
  
}







