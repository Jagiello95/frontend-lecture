import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScssFeaturesComponent } from './scss-features.component';

describe('ScssFeaturesComponent', () => {
  let component: ScssFeaturesComponent;
  let fixture: ComponentFixture<ScssFeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScssFeaturesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScssFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
