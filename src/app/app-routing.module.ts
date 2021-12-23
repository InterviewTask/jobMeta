import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    redirectTo:'applicant',
    pathMatch:'full'
  },
  {
    path:'applicant',
    loadChildren:()=>import('./pages/applicant').then(m=>m.ApplicantModule)
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
