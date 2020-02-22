import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthandfComponent } from './healthandf.component';

describe('HealthandfComponent', () => {
  let component: HealthandfComponent;
  let fixture: ComponentFixture<HealthandfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthandfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthandfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
