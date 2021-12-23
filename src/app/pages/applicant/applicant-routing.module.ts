import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicantComponent } from './applicant.component';
import { ApplicantListComponent, ApplicantNewComponent } from './components';

const routes: Routes = [
  {
    path: '',
    component: ApplicantComponent,
    children: [
      {
        path: '',
        redirectTo: 'list'
      },
      {
        path: 'list',
        component: ApplicantListComponent
      },
      {
        path: 'new',
        component: ApplicantNewComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicantRoutingModule { }
