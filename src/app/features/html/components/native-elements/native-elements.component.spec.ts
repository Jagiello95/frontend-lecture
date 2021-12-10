import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NativeElementsComponent } from './native-elements.component';

describe('NativeElementsComponent', () => {
  let component: NativeElementsComponent;
  let fixture: ComponentFixture<NativeElementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NativeElementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NativeElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
