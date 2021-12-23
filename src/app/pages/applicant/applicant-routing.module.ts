import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicantComponent } from './applicant.component';
import { ApplicantListComponent } from './components';

const routes: Routes = [
  {
    path:'',
    component:ApplicantComponent,
    children:[
      {
        path:'',
        component:ApplicantListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicantRoutingModule { }
