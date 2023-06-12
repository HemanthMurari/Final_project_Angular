import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpDataService {  
  constructor(private http: HttpClient) { }

  getData() {
  return this.http.get<any>('https://temp-80aee-default-rtdb.firebaseio.com/data.json');
}
getdetails(id:number){
  return this.http.get("https://temp-80aee-default-rtdb.firebaseio.com/data.json/"+id)
}
}




//   private employeesUrl = 'http://localhost:4500/employee'; 

// constructor(private http: HttpClient) { }

// getEmployees(): Observable<any[]> {
//   return this.http.get<any[]>(this.employeesUrl);
// }





//   constructor(private http:HttpClient) { }

//   getData(id:any){
//     return this.http.get<any>('https://temp-80aee-default-rtdb.firebaseio.com/data/2/Employee%20ID.json'+id);
//   }

//   getuser(){
//     return this.http.get<any>('https://temp-80aee-default-rtdb.firebaseio.com/data/2/Employee%20ID.json');
    
//   }
//   getEmployeeById(employeeId: any) {
//     return this.http.get<any>('https://temp-80aee-default-rtdb.firebaseio.com/data/2/Employee%20ID.json' + employeeId);
//   }
// }
