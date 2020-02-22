import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffiComponent } from './affi.component';

describe('AffiComponent', () => {
  let component: AffiComponent;
  let fixture: ComponentFixture<AffiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
