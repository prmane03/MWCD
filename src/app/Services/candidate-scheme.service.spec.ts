import { TestBed } from '@angular/core/testing';

import { CandidateSchemeService } from './candidate-scheme.service';

describe('CandidateSchemeService', () => {
  let service: CandidateSchemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CandidateSchemeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
