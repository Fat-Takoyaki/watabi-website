import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestPeriod } from './best-period';

describe('BestPeriod', () => {
  let component: BestPeriod;
  let fixture: ComponentFixture<BestPeriod>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BestPeriod]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BestPeriod);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
