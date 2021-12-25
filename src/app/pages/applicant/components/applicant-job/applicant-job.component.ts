import { from } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ICategory } from '../../model';

import { ApplicantService } from '../../services';

@Component({
  selector: 'app-applicant-job',
  templateUrl: './applicant-job.component.html',
  styleUrls: ['./applicant-job.component.scss']
})
export class ApplicantJobComponent implements OnInit {
  form !: FormGroup;
  submited:boolean=false;
  categories: ICategory[] = [];

  constructor(
    private router:Router,
    private applicantService: ApplicantService,
    private formBuilder: FormBuilder,

  ) { }

  ngOnInit(): void {
    this.createFrom();
    this.applicantService.categorylist().subscribe(res => {
      this.categories = res;
    })
  }
  createFrom() {
    this.form = this.formBuilder.group({
      title : [null, [Validators.required]],
      type: ["full-time", [Validators.required]],
      location: ['"lat":51.82243016108728,"lng":7.017075749999999', [Validators.required]],
      description: [null, []],
      category: [null, []],

    })
  }


  onSubmit() {
    this.form.get("category")?.setValue(this.categories.filter(x=>x.id==this.form.get("category")?.value))
    // console.log(this.form.value);
    this.submited=true;
    if(this.form.invalid)return
    this.applicantService.createJob(this.form.value).subscribe(res=>{
      this.router.navigate(["/applicant/new"]);
    })

  }
}
