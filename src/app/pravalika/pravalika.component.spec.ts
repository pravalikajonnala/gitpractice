import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PravalikaComponent } from './pravalika.component';

describe('PravalikaComponent', () => {
  let component: PravalikaComponent;
  let fixture: ComponentFixture<PravalikaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PravalikaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PravalikaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
