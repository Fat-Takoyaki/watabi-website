import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomTravelTypes } from './custom-travel-types';

describe('CustomTravelTypes', () => {
  let component: CustomTravelTypes;
  let fixture: ComponentFixture<CustomTravelTypes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomTravelTypes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomTravelTypes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
