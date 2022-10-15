import { TestBed } from '@angular/core/testing';

import { ShelvingService } from './shelving.service';

describe('ShelvingService', () => {
  let service: ShelvingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShelvingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
