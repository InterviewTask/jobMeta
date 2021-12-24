import { IApplicantList } from './../../model/applicant-list.model';
import { Component, OnInit } from '@angular/core';
import { ApplicantService } from '../../services';
import { IPagination } from '../../model';

@Component({
  selector: 'app-applicant-list',
  templateUrl: './applicant-list.component.html',
  styleUrls: ['./applicant-list.component.scss']
})
export class ApplicantListComponent implements OnInit {
applicantList!:IApplicantList;
  constructor(private applicantService: ApplicantService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.applicantService.applicantList().subscribe(
      (res: IApplicantList) => {
        this.applicantList=res;
        console.log("LIST: ",res);

      })
  }
  changePage(page:number){
    console.log("Page: ",page);

  }
}
