import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Watabi } from './watabi';

describe('Watabi', () => {
  let component: Watabi;
  let fixture: ComponentFixture<Watabi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Watabi]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Watabi);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
