import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeHeadingsComponent } from './resume-headings.component';

describe('ResumeHeadingsComponent', () => {
  let component: ResumeHeadingsComponent;
  let fixture: ComponentFixture<ResumeHeadingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumeHeadingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeHeadingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
