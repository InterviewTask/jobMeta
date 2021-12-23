
import { Injectable } from '@angular/core';
import { ApiService } from '@job-mata/core';
import { Observable } from 'rxjs';
import { IApplicantList } from '../model';

@Injectable()
export class ApplicantService {

  constructor(private apiService:ApiService) { }

  applicantList():Observable<IApplicantList>{
    return this.apiService.get<IApplicantList>
    ('application')
  }
}
