import { TestBed } from '@angular/core/testing';

import { BookItemService } from './book-item.service';

describe('BookItemService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BookItemService = TestBed.get(BookItemService);
    expect(service).toBeTruthy();
  });
});
