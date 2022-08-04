import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoCarouselComponent } from './photo-carousel.component';

describe('PhotoCarouselComponent', () => {
  let component: PhotoCarouselComponent;
  let fixture: ComponentFixture<PhotoCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoCarouselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotoCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
