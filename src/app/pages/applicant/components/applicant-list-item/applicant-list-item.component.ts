import { ApplicantService } from './../../services/applicant.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IApplicant } from '../../model';

@Component({
  selector: 'applicant-list-item',
  templateUrl: './applicant-list-item.component.html',
  styleUrls: ['./applicant-list-item.component.scss']
})
export class ApplicantListItemComponent implements OnInit {
@Input("applicant")
applicant?:IApplicant
@Output('Delete') delete = new EventEmitter<string>();
  constructor(private applicantService:ApplicantService) { }

  ngOnInit(): void {
  }

  deleteItem(){
    this.applicantService.deleteApplicant(this.applicant?.id).subscribe(res=>{
      this.delete.emit("itemDeletes")
    })
  }


}
