import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookLendingComponent } from './book-lending.component';

describe('BookLendingComponent', () => {
  let component: BookLendingComponent;
  let fixture: ComponentFixture<BookLendingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookLendingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookLendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
