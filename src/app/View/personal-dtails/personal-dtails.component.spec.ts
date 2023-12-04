import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalDtailsComponent } from './personal-dtails.component';

describe('PersonalDtailsComponent', () => {
  let component: PersonalDtailsComponent;
  let fixture: ComponentFixture<PersonalDtailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalDtailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalDtailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
