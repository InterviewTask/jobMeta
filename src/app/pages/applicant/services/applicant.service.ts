import { HttpParams } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { ApiService, UrlParameterHandlerService } from '@job-mata/core';
import { Observable } from 'rxjs';
import { IApplicantList } from '../model';

@Injectable()
export class ApplicantService {

  constructor(
    private apiService: ApiService,
    private urlParameterHandlerService: UrlParameterHandlerService) { }

  applicantList(): Observable<IApplicantList> {
    let params = new HttpParams()
      .set("external", this.urlParameterHandlerService.UrlParam);
    return this.apiService.get<IApplicantList>
      ('application', params)
  }
  Param(external?: any){
    external ? this.urlParameterHandlerService.UrlParam = JSON.stringify(external) : null;
  }
}
