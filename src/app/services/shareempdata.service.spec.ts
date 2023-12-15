import { TestBed } from '@angular/core/testing';

import { ShareempdataService } from './shareempdata.service';

describe('ShareempdataService', () => {
  let service: ShareempdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShareempdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
