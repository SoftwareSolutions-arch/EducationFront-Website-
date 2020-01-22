import { TestBed } from '@angular/core/testing';

import { SearchcollegeService } from './searchcollege.service';

describe('SearchcollegeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SearchcollegeService = TestBed.get(SearchcollegeService);
    expect(service).toBeTruthy();
  });
});
