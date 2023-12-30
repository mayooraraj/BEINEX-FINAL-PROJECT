import { TestBed } from '@angular/core/testing';

import { CardViewleaveService } from './card-viewleave.service';

describe('CardViewleaveService', () => {
  let service: CardViewleaveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardViewleaveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
