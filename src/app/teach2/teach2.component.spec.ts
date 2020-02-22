import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Teach2Component } from './teach2.component';

describe('Teach2Component', () => {
  let component: Teach2Component;
  let fixture: ComponentFixture<Teach2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Teach2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Teach2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
