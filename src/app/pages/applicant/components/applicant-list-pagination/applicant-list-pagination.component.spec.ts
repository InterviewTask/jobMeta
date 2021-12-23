import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicantListPaginationComponent } from './applicant-list-pagination.component';

describe('ApplicantListPaginationComponent', () => {
  let component: ApplicantListPaginationComponent;
  let fixture: ComponentFixture<ApplicantListPaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicantListPaginationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicantListPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
