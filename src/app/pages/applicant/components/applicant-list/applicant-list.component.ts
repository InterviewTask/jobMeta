import { UrlParameterHandlerService } from '@job-mata/core';
import { IApplicantList } from './../../model/applicant-list.model';
import { Component, OnInit } from '@angular/core';
import { ApplicantService } from '../../services';
import { IExternal } from '../../model';

@Component({
  selector: 'app-applicant-list',
  templateUrl: './applicant-list.component.html',
  styleUrls: ['./applicant-list.component.scss']
})
export class ApplicantListComponent implements OnInit {
  applicantList!: IApplicantList;
  NameSort:boolean=false;
  PhoneSort:boolean=false;
  JobSort:boolean=false;
  StatusSort:boolean=false;
  external :IExternal= {
    page: 1,
    sort: []
  }

  message:string="";
  constructor(private applicantService: ApplicantService,
    private urlParameterHandlerService:UrlParameterHandlerService)
    {}

  ngOnInit(): void {

    this.getData();
  }

  getData() {
    this.urlParameterHandlerService._UrlParam$.subscribe(() => {
      this.applicantService.applicantList().subscribe(
        (res: IApplicantList) => {
          this.applicantList = res;

        })
    });
  }
  sortFild(fild:string,type:string){
    var index =  this.external.sort.findIndex(x => x.sortBy==fild);
    index === -1 ? this.external.sort.push({orderBy:type,sortBy:fild}) : this.external.sort[index].orderBy=type;
    this.applicantService.Param(this.external,this.urlParameterHandlerService.UrlParam.search,this.urlParameterHandlerService.UrlParam.job_id)
  }
  changePage(page: number) {
    this.external.page=page;
    this.applicantService.Param(this.external,this.urlParameterHandlerService.UrlParam.search,this.urlParameterHandlerService.UrlParam.job_id)  }
}
