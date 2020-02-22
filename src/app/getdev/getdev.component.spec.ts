import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetdevComponent } from './getdev.component';

describe('GetdevComponent', () => {
  let component: GetdevComponent;
  let fixture: ComponentFixture<GetdevComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetdevComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetdevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
