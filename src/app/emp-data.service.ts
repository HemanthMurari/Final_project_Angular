import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpDataService {
//   constructor(private http: HttpClient) { }
//   searchEmployeeById(employeeId: string) {
//      const apiUrl = 'https://temp-80aee-default-rtdb.firebaseio.com';
//     return this.http.get(`${apiUrl}/data/2.json`);
//   }
// }


  private apiUrl = 'https://temp-80aee-default-rtdb.firebaseio.com/data.json';
  constructor(private http: HttpClient) { }

  getEmployeeById(employeeId: number): Observable<any> {
    return this.http.get<any[]>(this.apiUrl);
  }

}

