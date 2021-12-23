import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicantNavLayoutComponent } from './applicant-nav-layout.component';

describe('ApplicantNavLayoutComponent', () => {
  let component: ApplicantNavLayoutComponent;
  let fixture: ComponentFixture<ApplicantNavLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicantNavLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicantNavLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
