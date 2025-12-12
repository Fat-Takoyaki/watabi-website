import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroJapanTravel } from './hero-japan-travel';

describe('HeroJapanTravel', () => {
  let component: HeroJapanTravel;
  let fixture: ComponentFixture<HeroJapanTravel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroJapanTravel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroJapanTravel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
