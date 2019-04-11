import { TestBed } from '@angular/core/testing';

import { MastertypeService } from './mastertype.service';

describe('MastertypeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MastertypeService = TestBed.get(MastertypeService);
    expect(service).toBeTruthy();
  });
});
