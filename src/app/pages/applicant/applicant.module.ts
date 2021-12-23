import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplicantRoutingModule } from './applicant-routing.module';
import { ApplicantComponent } from './applicant.component';
import { ApplicantMasterLayoutComponent } from './layout/applicant-master-layout/applicant-master-layout.component';
import { ApplicantNavLayoutComponent } from './layout/applicant-nav-layout/applicant-nav-layout.component';


@NgModule({
  declarations: [
    ApplicantComponent,
    ApplicantMasterLayoutComponent,
    ApplicantNavLayoutComponent
  ],
  imports: [
    CommonModule,
    ApplicantRoutingModule
  ]
})
export class ApplicantModule { }
