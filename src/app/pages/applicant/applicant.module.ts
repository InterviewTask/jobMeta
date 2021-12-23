import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplicantRoutingModule } from './applicant-routing.module';
import { ApplicantComponent } from './applicant.component';
import { ApplicantMasterLayoutComponent } from './layout/applicant-master-layout/applicant-master-layout.component';
import { ApplicantNavLayoutComponent } from './layout/applicant-nav-layout/applicant-nav-layout.component';
import { ApplicantListComponent } from './components/applicant-list/applicant-list.component';
import { ApplicantSearchComponent } from './components/applicant-search/applicant-search.component';
import { SharedModule } from '@job-mata/share';


@NgModule({
  declarations: [
    ApplicantComponent,
    ApplicantMasterLayoutComponent,
    ApplicantNavLayoutComponent,
    ApplicantListComponent,
    ApplicantSearchComponent
  ],
  imports: [
    CommonModule,
    ApplicantRoutingModule,
    SharedModule
  ]
})
export class ApplicantModule { }
