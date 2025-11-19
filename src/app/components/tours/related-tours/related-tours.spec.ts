import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatedTours } from './related-tours';

describe('RelatedTours', () => {
  let component: RelatedTours;
  let fixture: ComponentFixture<RelatedTours>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RelatedTours]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelatedTours);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
