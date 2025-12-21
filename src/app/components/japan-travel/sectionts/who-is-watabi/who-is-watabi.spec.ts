import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoIsWatabi } from './who-is-watabi';

describe('WhoIsWatabi', () => {
  let component: WhoIsWatabi;
  let fixture: ComponentFixture<WhoIsWatabi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhoIsWatabi]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhoIsWatabi);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
