import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetChartComponent } from './get-chart/get-chart.component';
import { EditComponent } from './edit/edit.component';
import { Home1Component } from './home1/home1.component';

const routes: Routes = [
  {path : '', component: Home1Component},
  {
    path : 'get' , component: GetChartComponent
  },
  {
    path: 'edit' , component : EditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
