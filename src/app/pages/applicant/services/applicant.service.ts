import { IJobCategory } from './../model/job.model';
import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService, IApiResponce, IUrlParam, UrlParameterHandlerService } from '@job-mata/core';
import { Observable } from 'rxjs';
import { IApplicant, ICategory, Ijob } from '../model';

@Injectable()
export class ApplicantService {

  constructor(
    private apiService: ApiService,
    private urlParameterHandlerService: UrlParameterHandlerService) { }

  Param(external?: any, search?: string, jobId?: any) {
    let param: IUrlParam = { external: JSON.stringify(external), search: search, job_id: jobId ? jobId + "" : undefined };
    if (!external)
      delete param.external;
    this.urlParameterHandlerService.setUrlParam(param);
  }
  applicantList(): Observable<IApiResponce<IApplicant>> {
    let params = new HttpParams()
      .set("external", this.urlParameterHandlerService.UrlParam.external ?? '')
      .set("search", this.urlParameterHandlerService.UrlParam.search ?? '')
      .set("job_id", this.urlParameterHandlerService.UrlParam.job_id ?? '');
    return this.apiService.get<IApiResponce<IApplicant>>
      ('application', params);
  }
  jobList(): Observable<IApiResponce<Ijob>> {
    return this.apiService.get<IApiResponce<Ijob>>
      ('job');
  }

  createApplicant(model: IApplicant): Observable<IApplicant> {
    return this.apiService.post<IApplicant>
      ("application", model);

  }
  createJob(model: Ijob): Observable<Ijob> {
    return this.apiService.post<Ijob>
      ("job", model);

  }
  deleteApplicant(id?: number): Observable<any> {
    return this.apiService.delete<any>
      ("application/"+id);

  }

  categorylist(): Observable<ICategory[]> {
    return this.apiService.get<ICategory[]>
      ('category');
  }


}
