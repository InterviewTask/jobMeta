import { HttpParams } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { ApiService } from '@job-mata/core';
import { Observable } from 'rxjs';
import { IApplicantList } from '../model';

@Injectable()
export class ApplicantService {

  constructor(private apiService:ApiService) { }

  applicantList(external? :any):Observable<IApplicantList>{
    let params=new HttpParams()
    .set("external",JSON.stringify(external));

    return this.apiService.get<IApplicantList>
    ('application',params)
  }
}
