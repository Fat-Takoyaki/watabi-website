import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatsIncluded } from './whats-included';

describe('WhatsIncluded', () => {
  let component: WhatsIncluded;
  let fixture: ComponentFixture<WhatsIncluded>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhatsIncluded]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhatsIncluded);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
