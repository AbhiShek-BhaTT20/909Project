import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../employee';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  reset() {
    throw new Error('Method not implemented.');
  }




  constructor(private http: HttpClient) {

  }

  addEmployee(employee: Employee): Observable<string> {
      const url = environment.employeeAPIUrl + '/employee';
      return this.http.post<string>(url, employee)

  }
}
