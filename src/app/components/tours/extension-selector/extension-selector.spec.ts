import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtensionSelector } from './extension-selector';

describe('ExtensionSelector', () => {
  let component: ExtensionSelector;
  let fixture: ComponentFixture<ExtensionSelector>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExtensionSelector]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtensionSelector);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
