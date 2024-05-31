import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import { Employee } from '../employee';
import { Observable, Subject, catchError, throwError} from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeFromService {
    reset() {
      throw new Error('Method not implemented.');
    }

  
  

    constructor(private http: HttpClient) {

    }

    addEmployee(employee: Employee): Observable<string> {
        const url = environment.employeeAPIUrl + '/addEmployee';
        return this.http.post<string>(url, employee)

    }

   

}
