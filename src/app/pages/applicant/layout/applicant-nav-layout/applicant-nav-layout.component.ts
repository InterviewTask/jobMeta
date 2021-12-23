import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

@Component({
  selector: 'applicant-nav-layout',
  templateUrl: './applicant-nav-layout.component.html',
  styleUrls: ['./applicant-nav-layout.component.scss']
})
export class ApplicantNavLayoutComponent implements OnInit {
  showSearchComponent: boolean = false;
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    router.events.subscribe(
      (event: any) => {
        if (event instanceof NavigationEnd) {
          this.router.url === "/applicant/list" ? this.showSearchComponent = true : this.showSearchComponent = false;
        }
      }
    );
  }

  ngOnInit(): void {
  }

}
