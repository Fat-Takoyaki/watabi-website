import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroJapanTravel } from './intro-japan-travel';

describe('IntroJapanTravel', () => {
  let component: IntroJapanTravel;
  let fixture: ComponentFixture<IntroJapanTravel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntroJapanTravel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntroJapanTravel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
