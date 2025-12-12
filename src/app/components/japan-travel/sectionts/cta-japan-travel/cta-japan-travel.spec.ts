import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtaJapanTravel } from './cta-japan-travel';

describe('CtaJapanTravel', () => {
  let component: CtaJapanTravel;
  let fixture: ComponentFixture<CtaJapanTravel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CtaJapanTravel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CtaJapanTravel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
