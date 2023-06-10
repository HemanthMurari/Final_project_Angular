import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpDataService {  
  private employeesUrl = 'http://localhost:4500/employee'; 

constructor(private http: HttpClient) { }

getEmployees(): Observable<any[]> {
  return this.http.get<any[]>(this.employeesUrl);
}
  // id="19000445"

  // constructor(private http:HttpClient) { }

  // getData(){
  //   return this.http.get<any>('https://temp-80aee-default-rtdb.firebaseio.com/data.json/'+this.id);
  // }

  // getuser(){
  //   return this.http.get<any>('https://temp-80aee-default-rtdb.firebaseio.com/data.json');
    
  // }
}
