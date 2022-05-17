import { TestBed } from '@angular/core/testing';

import { CandidateCourseService } from './candidate-course.service';

describe('CandidateCourseService', () => {
  let service: CandidateCourseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CandidateCourseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
