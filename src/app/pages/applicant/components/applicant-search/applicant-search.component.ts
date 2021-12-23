import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'applicant-search',
  templateUrl: './applicant-search.component.html',
  styleUrls: ['./applicant-search.component.scss']
})
export class ApplicantSearchComponent implements OnInit {
  cars = [
    { id: 1, name: 'Volvo' },
    { id: 2, name: 'Saab' },
    { id: 3, name: 'Opel' },
    { id: 4, name: 'Audi' },
];
  constructor() { }

  ngOnInit(): void {
  }

}
