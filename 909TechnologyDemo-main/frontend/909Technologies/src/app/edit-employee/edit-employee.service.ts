import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EditEmployeeService {

  constructor(private http: HttpClient) {}

  getEmployeeById(id: any): Observable<any> {
    let url: string=environment.employeeDetailsbyIdAPI+"/getEmployee/"+id;
    return <Observable<any>>(this.http.get(url))
  }
  editEmployee(employeeId: string, updatedEmployeeData: any): Observable<any> {
    let url:string=environment.updateEmployeeDetails+"/editEmployee/"+employeeId;
    return <Observable<any>>(this.http.put(url, updatedEmployeeData));
  }

}
