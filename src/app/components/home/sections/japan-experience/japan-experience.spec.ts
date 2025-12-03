import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JapanExperience } from './japan-experience';

describe('JapanExperience', () => {
  let component: JapanExperience;
  let fixture: ComponentFixture<JapanExperience>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JapanExperience]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JapanExperience);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
