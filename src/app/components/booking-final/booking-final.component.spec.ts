import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingFinalComponent } from './booking-final.component';

describe('BookingFinalComponent', () => {
  let component: BookingFinalComponent;
  let fixture: ComponentFixture<BookingFinalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingFinalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingFinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
