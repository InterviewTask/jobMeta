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
  pagination: IPagination={
    curPage:null,
    nextPage:null,
    pageTotal:null,
    prevPage:null
  };
  constructor(private applicantService: ApplicantService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.applicantService.applicantList().subscribe(
      (res: IApplicantList) => {
         this.pagination.curPage = res.curPage;
        this.pagination.nextPage = res.nextPage;
        this.pagination.pageTotal = res.pageTotal;
        this.pagination.prevPage = res.prevPage;
        console.log("LOOOGG: ",this.pagination);
        console.log("RESSSS: ",res);

      })
  }

}
