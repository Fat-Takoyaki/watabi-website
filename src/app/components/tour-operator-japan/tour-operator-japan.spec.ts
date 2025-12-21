import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourOperatorJapan } from './tour-operator-japan';

describe('TourOperatorJapan', () => {
  let component: TourOperatorJapan;
  let fixture: ComponentFixture<TourOperatorJapan>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TourOperatorJapan]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TourOperatorJapan);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
