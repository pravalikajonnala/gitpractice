import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Branch4Component } from './branch4.component';

describe('Branch4Component', () => {
  let component: Branch4Component;
  let fixture: ComponentFixture<Branch4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Branch4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Branch4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
