import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerdevComponent } from './perdev.component';

describe('PerdevComponent', () => {
  let component: PerdevComponent;
  let fixture: ComponentFixture<PerdevComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerdevComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerdevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
