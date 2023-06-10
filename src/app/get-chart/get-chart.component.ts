import { Component, OnInit } from '@angular/core';
import { EmpDataService } from '../emp-data.service';

@Component({
  selector: 'app-get-chart',
  templateUrl: './get-chart.component.html',
  styleUrls: ['./get-chart.component.css']
})
export class GetChartComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
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


}
