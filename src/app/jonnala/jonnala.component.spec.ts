import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JonnalaComponent } from './jonnala.component';

describe('JonnalaComponent', () => {
  let component: JonnalaComponent;
  let fixture: ComponentFixture<JonnalaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JonnalaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JonnalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
