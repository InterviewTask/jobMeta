import { Component, Input, OnInit } from '@angular/core';
import { IApplicant } from '../../model';

@Component({
  selector: 'applicant-list-item',
  templateUrl: './applicant-list-item.component.html',
  styleUrls: ['./applicant-list-item.component.scss']
})
export class ApplicantListItemComponent implements OnInit {
@Input("applicant")
applicant?:IApplicant
  constructor() { }

  ngOnInit(): void {
  }

}
