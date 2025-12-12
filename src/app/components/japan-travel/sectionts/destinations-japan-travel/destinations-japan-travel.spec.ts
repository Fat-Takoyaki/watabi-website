import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinationsJapanTravel } from './destinations-japan-travel';

describe('DestinationsJapanTravel', () => {
  let component: DestinationsJapanTravel;
  let fixture: ComponentFixture<DestinationsJapanTravel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DestinationsJapanTravel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DestinationsJapanTravel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
