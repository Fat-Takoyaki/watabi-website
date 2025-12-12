import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingJapanTravel } from './shopping-japan-travel';

describe('ShoppingJapanTravel', () => {
  let component: ShoppingJapanTravel;
  let fixture: ComponentFixture<ShoppingJapanTravel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShoppingJapanTravel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoppingJapanTravel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
