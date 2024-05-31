import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Employee } from '../employee';
import { EmployeeFromService } from './employee-from.service';
import { EmployeeValidator } from '../validator/employee.validator';
@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {

  employee!: Employee;
  employeeForm!: FormGroup;
  errorMessage!: string;
  successMessage!: string;
  showSuccessMessage = false;
  constructor(private fb: FormBuilder, private employeeformService: EmployeeFromService) {

  }

  ngOnInit() {
      this.employee = new Employee();
      this.createForm();

  }
  createForm() {

      this.employeeForm= this.fb.group({
          email: [this.employee.email, [Validators.required, EmployeeValidator.validateEmailId]],
          name: [this.employee.name, [Validators.required]],
          phoneNumber: [this.employee.phone_number, [Validators.required, EmployeeValidator.validatePhoneNumber]],
          role:[this.employee.role,[Validators.required]],
          password:[this.employee.password,[Validators.required]],
          age:[this.employee.age,[Validators.required]],
          gender:[this.employee.gender,[Validators.required]]

      });
  }

  addUser() {
      this.errorMessage = "";
      this.successMessage = "";
      this.employee = this.employeeForm.value as Employee;

      this.employeeformService.addEmployee(this.employee)
          .subscribe(
              message => {
                  this.employeeformService.reset();
              }
              , error => this.errorMessage = <any>error
          )
          this.showSuccessMessage = true;
          

  }




  }

 
  


  



  



