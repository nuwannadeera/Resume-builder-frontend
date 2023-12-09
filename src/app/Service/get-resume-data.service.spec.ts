import { TestBed } from '@angular/core/testing';

import { GetResumeDataService } from './get-resume-data.service';

describe('GetResumeDataService', () => {
  let service: GetResumeDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetResumeDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
