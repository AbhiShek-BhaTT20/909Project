import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { EditEmployeeService } from "./edit-employee.service";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
    selector: 'app-edit-employee',
    templateUrl: './edit-employee.component.html',
    styleUrls: ['./edit-employee.component.css']
  })
  export class EmployeeEditComponent implements OnInit {
    employeeId: any;
  employee: any;
  employeeForm!: FormGroup;
  showSuccessMessage = false;
  


  constructor(private route:ActivatedRoute,private editService:EditEmployeeService, private formBuilder: FormBuilder,private snackbar:MatSnackBar) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.employeeId = params.get('id');
       this.initForm();
      this.fetchEmployeeDetails(this.employeeId);
      
    });
  }
  initForm() {
    this.employeeForm = this.formBuilder.group({
      name: ['', Validators.required],
      age: ['', Validators.required],
      gender: [null],
      email:['',Validators.required],
      phoneNumber:['',Validators.required],
      role:['',Validators.required]
    });
  }
  fetchEmployeeDetails(id: any) {
    this.editService.getEmployeeById(id).subscribe(data => {
        this.employeeForm.patchValue(data); 
      });
    };
    saveEmployee() {
        if (this.employeeForm.valid) {
          const updatedEmployeeData = this.employeeForm.value;
          const employeeId = this.employeeId 
          this.editService.editEmployee(employeeId, updatedEmployeeData).subscribe(
            
            response => {
              console.log('Employee updated successfully:', response);
            },
            error => {
              console.log('Error occur');
            }
          );
        } else {
          this.employeeForm.markAllAsTouched();
        }
        this.showSuccessMessage = true;
        
      }
  }
