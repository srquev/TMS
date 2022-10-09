import { TestBed } from '@angular/core/testing';

import { TmsResolverService } from './tms-resolver.service';

describe('TmsResolverService', () => {
  let service: TmsResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TmsResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
