import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialTour } from './special-tour';

describe('SpecialTour', () => {
  let component: SpecialTour;
  let fixture: ComponentFixture<SpecialTour>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpecialTour]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecialTour);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
