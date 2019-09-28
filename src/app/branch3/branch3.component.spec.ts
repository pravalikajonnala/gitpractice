import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Branch3Component } from './branch3.component';

describe('Branch3Component', () => {
  let component: Branch3Component;
  let fixture: ComponentFixture<Branch3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Branch3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Branch3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
