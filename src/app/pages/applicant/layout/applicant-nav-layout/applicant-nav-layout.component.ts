import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'applicant-nav-layout',
  templateUrl: './applicant-nav-layout.component.html',
  styleUrls: ['./applicant-nav-layout.component.scss']
})
export class ApplicantNavLayoutComponent implements OnInit {
  showSearchComponent: boolean = false;
  constructor(private router: Router) {
    this.router.url === "/list" ? this.showSearchComponent = true : this.showSearchComponent = false;
  }

  ngOnInit(): void {
  }

}
