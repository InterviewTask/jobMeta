import { Router } from '@angular/router';
import { HttpEvent, HttpEventType, HttpResponse } from '@angular/common/http';
import { IFileUpload } from './../../../../shared/models/file-upload.model';
import { Component, OnInit } from '@angular/core';
import { AsyncValidator, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FileUploadService } from '@job-mata/share';
import { Ijob } from '../../model';
import { ApplicantService } from '../../services';

@Component({
  selector: 'app-applicant-new',
  templateUrl: './applicant-new.component.html',
  styleUrls: ['./applicant-new.component.scss']
})
export class ApplicantNewComponent implements OnInit {
  form !: FormGroup;
  submited:boolean=false;
  jobs: Ijob[] = [];
  status = [
    {
      id: 0,
      title: "pending_review"
    }
  ]
  fileContent: File | null = null;
  fileName: string = "Choese File";
  percentDone: any = "";
  constructor(
    private router:Router,
    private applicantService: ApplicantService,
    private formBuilder: FormBuilder,
    private fileUploadService: FileUploadService
  ) { }

  ngOnInit(): void {
    this.createFrom();
    this.applicantService.jobList().subscribe(res => {
      this.jobs = res.items;
    })
  }
  createFrom() {
    this.form = this.formBuilder.group({
      job_id: [null, []],
      name: [null, [Validators.required]],
      phone: [null, [Validators.required]],
      email: [null, [Validators.required]],
      status: [null, []],
      resume: [null, []]
    })
  }

  handleFileInput(event: any) {
    this.fileName = event.files[0]?.name;
    this.fileUploadService.postFile(event.files[0]).subscribe(
      (response: any) => {
        if (response.type === HttpEventType["UploadProgress"]) {
          const percentDone = Math.round((100 * response.loaded) / response.total);
          this.percentDone = percentDone + "%";
        } else if (response instanceof HttpResponse) {
          this.form.get('resume')?.setValue(response.body)
        }
      });
  }
  onSubmit() {
    this.submited=true;
    if(this.form.invalid)return
    this.applicantService.createApplicant(this.form.value).subscribe(res=>{
     this.navigate("/")
    })
    // console.log(this.form.value);
  }

  navigate(path:string){
    this.router.navigate([path]);
  }

}
