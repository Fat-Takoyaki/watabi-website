import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoJapanTravel } from './info-japan-travel';

describe('InfoJapanTravel', () => {
  let component: InfoJapanTravel;
  let fixture: ComponentFixture<InfoJapanTravel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoJapanTravel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoJapanTravel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
