import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelType } from './travel-type';

describe('TravelType', () => {
  let component: TravelType;
  let fixture: ComponentFixture<TravelType>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TravelType],
    }).compileComponents();

    fixture = TestBed.createComponent(TravelType);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
