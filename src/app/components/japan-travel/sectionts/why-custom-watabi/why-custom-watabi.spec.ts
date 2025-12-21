import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyCustomWatabi } from './why-custom-watabi';

describe('WhyCustomWatabi', () => {
  let component: WhyCustomWatabi;
  let fixture: ComponentFixture<WhyCustomWatabi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhyCustomWatabi]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhyCustomWatabi);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
