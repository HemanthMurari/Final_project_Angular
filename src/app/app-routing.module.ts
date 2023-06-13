import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home1Component } from './home1/home1.component';

const routes: Routes = [
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
