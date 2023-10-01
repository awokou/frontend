import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from "rxjs/index";
import { Employee } from '../model/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private _httpClient: HttpClient) { }

  getListOfAllEmployees(): Observable<Employee[]> {
    return this._httpClient.get<Employee[]>(`${environment.backendUrl}/api/employees`);
  }

  getEmployeeById(id: number): Observable<any> {
    return this._httpClient.get(`${environment.backendUrl}/api/employees/${id}`);
  }

  createNewEmployee(employee: Employee): Observable<Employee> {
    return this._httpClient.post<Employee>(`${environment.backendUrl}/api/employees`, employee);
  }

  updateEmployee(id: number, employee: Employee): Observable<Employee> {
    return this._httpClient.put<Employee>(`${environment.backendUrl}/api/employees/${id}`, employee);
  }

  deleteEmployee(id: number): Observable<any> {
    return this._httpClient.delete<any>(`${environment.backendUrl}/api/employees/${id}`);
  }
}
