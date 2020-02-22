import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OoComponent } from './oo.component';

describe('OoComponent', () => {
  let component: OoComponent;
  let fixture: ComponentFixture<OoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
