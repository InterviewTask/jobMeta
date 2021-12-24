import { IApplicantList } from './../../model/applicant-list.model';
import { Component, OnInit } from '@angular/core';
import { ApplicantService } from '../../services';
import { IExternal, IPagination } from '../../model';

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
  constructor(private applicantService: ApplicantService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.applicantService.applicantList().subscribe(
      (res: IApplicantList) => {
        this.applicantList = res;
        console.log("LIST: ", res);
      })
  }
  sortFild(fild:string,type:string){
    console.log("FILD: ",fild,"TYPE: ",type);
    var index =  this.external.sort.findIndex(x => x.sortBy==fild);
    index === -1 ? this.external.sort.push({orderBy:type,sortBy:fild}) : this.external.sort[index].orderBy=type;

    this.applicantService.Param(this.external)
    this.getData();
  }
  changePage(page: number) {
    console.log("Page: ", page);
    this.external.page=page;
    this.applicantService.Param(this.external)
    this.getData()

  }
}
