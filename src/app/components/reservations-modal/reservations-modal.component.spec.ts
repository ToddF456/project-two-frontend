import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationsModalComponent } from './reservations-modal.component';

describe('ReservationsModalComponent', () => {
  let component: ReservationsModalComponent;
  let fixture: ComponentFixture<ReservationsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationsModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservationsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
