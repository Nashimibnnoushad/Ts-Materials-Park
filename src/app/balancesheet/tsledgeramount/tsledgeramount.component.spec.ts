import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TsledgeramountComponent } from './tsledgeramount.component';

describe('TsledgeramountComponent', () => {
  let component: TsledgeramountComponent;
  let fixture: ComponentFixture<TsledgeramountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TsledgeramountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TsledgeramountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
