import { IApplicantList } from './../../model/applicant-list.model';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { IPagination } from '../../model';

@Component({
  selector: 'applicant-list-pagination',
  templateUrl: './applicant-list-pagination.component.html',
  styleUrls: ['./applicant-list-pagination.component.scss']
})
export class ApplicantListPaginationComponent implements OnChanges {
  @Input('applicantList')
  applicantList?: IApplicantList;
  @Output('paginate') paginate = new EventEmitter<number>();
  pagination: IPagination = {
    curPage: undefined,
    nextPage: undefined,
    pageTotal: undefined,
    prevPage: undefined
  };
  constructor() {
   }
   ngOnInit(): void {
   }
   ngOnChanges() {
     this.pagination.curPage = this.applicantList?.curPage
     this.pagination.nextPage = this.applicantList?.nextPage
     this.pagination.prevPage = this.applicantList?.prevPage
     this.pagination.pageTotal = this.applicantList?.pageTotal
   }
  changePage(page: number|undefined) {
    this.paginate.emit(page)
  }

}
