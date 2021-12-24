import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplicantRoutingModule } from './applicant-routing.module';
import { ApplicantComponent } from './applicant.component';
import { ApplicantMasterLayoutComponent } from './layout/applicant-master-layout/applicant-master-layout.component';
import { ApplicantNavLayoutComponent } from './layout/applicant-nav-layout/applicant-nav-layout.component';
import { SharedModule } from '@job-mata/share';
import { ApplicantListComponent, ApplicantNewComponent, ApplicantSearchComponent } from './components';
import { ApplicantListItemComponent } from './components/applicant-list-item/applicant-list-item.component';
import { ApplicantService } from './services';
import { ApplicantListPaginationComponent } from './components/applicant-list-pagination/applicant-list-pagination.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApplicantJobComponent } from './components/applicant-job/applicant-job.component';

@NgModule({
  declarations: [
    ApplicantComponent,
    ApplicantMasterLayoutComponent,
    ApplicantNavLayoutComponent,
    ApplicantListComponent,
    ApplicantSearchComponent,
    ApplicantNewComponent,
    ApplicantListItemComponent,
    ApplicantListPaginationComponent,
    ApplicantJobComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ApplicantRoutingModule,
    SharedModule
  ],
  providers:[
    ApplicantService
  ]
})
export class ApplicantModule { }
