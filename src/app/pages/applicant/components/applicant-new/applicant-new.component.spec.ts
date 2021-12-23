import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicantNewComponent } from './applicant-new.component';

describe('ApplicantNewComponent', () => {
  let component: ApplicantNewComponent;
  let fixture: ComponentFixture<ApplicantNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicantNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicantNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
