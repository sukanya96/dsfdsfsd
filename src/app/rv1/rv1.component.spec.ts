import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Rv1Component } from './rv1.component';

describe('Rv1Component', () => {
  let component: Rv1Component;
  let fixture: ComponentFixture<Rv1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Rv1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Rv1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
