import { UrlParameterHandlerService } from '@job-mata/core';
import { ApplicantService } from './../../services/applicant.service';
import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {Ijob } from '../../model';

@Component({
  selector: 'applicant-search',
  templateUrl: './applicant-search.component.html',
  styleUrls: ['./applicant-search.component.scss']
})
export class ApplicantSearchComponent implements OnInit {
  jobs:Ijob[] = [];
  selectedJob?:number;
  searchText?:string="";

  constructor(
    private router:Router,
    private applicantService:ApplicantService,
    private urlParameterHandlerService:UrlParameterHandlerService
    ) { }

  ngOnInit(): void {
    this.applicantService.jobList().subscribe(res=>{
      this.jobs=res.items;
    })
    this.searchText=this.urlParameterHandlerService.UrlParam.search
    this.selectedJob=this.urlParameterHandlerService.UrlParam.job_id?+this.urlParameterHandlerService.UrlParam.job_id:0
  }

  navigate(path:string):void{
    this.router.navigate([path])
  }

  filter(){
     this.applicantService.Param(null,this.searchText,this.selectedJob);
  }

}
