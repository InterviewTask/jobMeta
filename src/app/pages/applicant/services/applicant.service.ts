import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService, IApiResponce, IUrlParam, UrlParameterHandlerService } from '@job-mata/core';
import { Observable } from 'rxjs';
import { IApplicant, Ijob } from '../model';

@Injectable()
export class ApplicantService {

  constructor(
    private apiService: ApiService,
    private urlParameterHandlerService: UrlParameterHandlerService) { }

  Param(external?: any, search?: string, jobId?: any) {
    let param: IUrlParam = { external: JSON.stringify(external), search: search, job_id: jobId ? jobId + "" : undefined }
    if (!external)
      delete param.external
    this.urlParameterHandlerService.setUrlParam(param)
  }
  applicantList(): Observable<IApiResponce<IApplicant>> {
    let params = new HttpParams()
      .set("external", this.urlParameterHandlerService.UrlParam.external ?? '')
      .set("search", this.urlParameterHandlerService.UrlParam.search ?? '')
      .set("job_id", this.urlParameterHandlerService.UrlParam.job_id ?? '');
    return this.apiService.get<IApiResponce<IApplicant>>
      ('application', params)
  }
  jobList(): Observable<IApiResponce<Ijob>> {
    return this.apiService.get<IApiResponce<Ijob>>
      ('job')
  }

}
