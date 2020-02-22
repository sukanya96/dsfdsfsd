import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Teach1Component } from './teach1.component';

describe('Teach1Component', () => {
  let component: Teach1Component;
  let fixture: ComponentFixture<Teach1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Teach1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Teach1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
