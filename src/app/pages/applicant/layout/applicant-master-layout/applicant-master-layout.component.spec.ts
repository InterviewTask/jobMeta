import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicantMasterLayoutComponent } from './applicant-master-layout.component';

describe('ApplicantMasterLayoutComponent', () => {
  let component: ApplicantMasterLayoutComponent;
  let fixture: ComponentFixture<ApplicantMasterLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicantMasterLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicantMasterLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
