import { TestBed } from '@angular/core/testing';

import { EntsService } from './ents.service';

describe('EntsService', () => {
  let service: EntsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EntsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
