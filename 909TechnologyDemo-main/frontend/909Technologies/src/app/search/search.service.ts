import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private apiUrl = 'http://localhost:8765/Project909/api/employee';

  constructor(private http: HttpClient) {}

  getFilteredEmployees(minAge: number, maxAge: number, role: string): Observable<any[]> {
    let params = new HttpParams();
    if (minAge !== null) {
      params = params.append('minAge', minAge.toString());
    }
    if (maxAge !== null) {
      params = params.append('maxAge', maxAge.toString());
    }
    if (role) {
      params = params.append('role', role);
    }
    return this.http.get<any[]>(`${this.apiUrl}/filter`, { params: params });
  }
}