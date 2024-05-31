import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, catchError, throwError } from 'rxjs';
import { environment } from '../../environments/environment';
import { Employee } from '../employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDetailsService {
  constructor(private http: HttpClient) { }

  private employe = new Subject<Employee>();
  getOrders(data: any): Observable<any> {
      let url: string = environment.employeeDetailsAPI + "/getAllEmployee";
      return <Observable<any>>(this.http.get(url))
  }

  editDetails(employee:Employee):Observable<any>{
    console.log(employee.id)
    let url: string=environment.updateEmployeeDetails+"/editEmployee/"+employee.id;
    return <Observable<any>>(this.http.put(url,employee))
  }

  deleteDetails(employee:Employee):Observable<any>{
    let url:string=environment.deleteEmployeeDetails+"/deleteEmployee/"+employee.id;
    return <Observable<any>>(this.http.delete(url,{responseType : "text" as "json"}));
   
  }
  
  
}
