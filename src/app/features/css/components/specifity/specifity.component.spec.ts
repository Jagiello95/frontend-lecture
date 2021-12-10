import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecifityComponent } from './specifity.component';

describe('SpecifityComponent', () => {
  let component: SpecifityComponent;
  let fixture: ComponentFixture<SpecifityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecifityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecifityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
