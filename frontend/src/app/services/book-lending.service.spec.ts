import { TestBed } from '@angular/core/testing';

import { BookLendingService } from './book-lending.service';

describe('BookLendingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BookLendingService = TestBed.get(BookLendingService);
    expect(service).toBeTruthy();
  });
});
