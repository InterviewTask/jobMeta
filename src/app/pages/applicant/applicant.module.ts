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

@NgModule({
  declarations: [
    ApplicantComponent,
    ApplicantMasterLayoutComponent,
    ApplicantNavLayoutComponent,
    ApplicantListComponent,
    ApplicantSearchComponent,
    ApplicantNewComponent,
    ApplicantListItemComponent
  ],
  imports: [
    CommonModule,
    ApplicantRoutingModule,
    SharedModule
  ],
  providers:[
    ApplicantService
  ]
})
export class ApplicantModule { }
