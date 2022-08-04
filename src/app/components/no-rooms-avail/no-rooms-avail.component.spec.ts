import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoRoomsAvailComponent } from './no-rooms-avail.component';

describe('NoRoomsAvailComponent', () => {
  let component: NoRoomsAvailComponent;
  let fixture: ComponentFixture<NoRoomsAvailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoRoomsAvailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoRoomsAvailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
