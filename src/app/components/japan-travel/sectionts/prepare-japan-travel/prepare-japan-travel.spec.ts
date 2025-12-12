import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrepareJapanTravel } from './prepare-japan-travel';

describe('PrepareJapanTravel', () => {
  let component: PrepareJapanTravel;
  let fixture: ComponentFixture<PrepareJapanTravel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrepareJapanTravel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrepareJapanTravel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
