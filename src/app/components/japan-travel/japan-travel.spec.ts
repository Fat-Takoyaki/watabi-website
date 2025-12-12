import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JapanTravel } from './japan-travel';

describe('JapanTravel', () => {
  let component: JapanTravel;
  let fixture: ComponentFixture<JapanTravel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JapanTravel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JapanTravel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
