import { Component,OnInit } from '@angular/core';
import { EmpDataService } from '../emp-data.service';

@Component({
  selector: 'app-home1',
  templateUrl: './home1.component.html',
  styleUrls: ['./home1.component.css']
})
export class Home1Component implements OnInit {
    Employee: any;

  constructor(private employeeService: EmpDataService) { }

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe(response => {
      this.Employee = response[2];
    });
  }



  // gdata: any;

  // constructor (private cs : EmpDataService){}
  // fetchData() {
  //   this.cs.getData().subscribe(
  //     (response: any) => {
  //       this.gdata = response;
  //     },
  //     (      error: any) => {
  //       console.error(error);
  //     }
  //   );
  // }
  // ngOnInit(): void {
  //   this.fetchData();
  // }




  // constructor(private fs : EmpDataService){

  //   this.empId = sessionStorage.getItem("empId");

  //   this.readdata(this.empId);

  // }

 // readdata(empId:any){
//   this.fs.getData().subscribe(
//     {
//       next: (data:any) =>{
//         for(let x of data){
//           if(x['Employee ID'] == empId){
//             this.e = x;
//           }
//         }
//       },
//       error : ()=>this.details = {}
//     }
//   )
// }
}
