import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GouziComponent } from './gouzi.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
      path: '',
      component: GouziComponent
  }
];

@NgModule({
  declarations: [GouziComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class GouziModule { }
