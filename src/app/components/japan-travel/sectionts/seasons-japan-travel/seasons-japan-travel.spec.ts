import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeasonsJapanTravel } from './seasons-japan-travel';

describe('SeasonsJapanTravel', () => {
  let component: SeasonsJapanTravel;
  let fixture: ComponentFixture<SeasonsJapanTravel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeasonsJapanTravel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeasonsJapanTravel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
