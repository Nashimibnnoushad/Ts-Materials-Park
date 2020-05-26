import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TsledgerComponent } from './tsledger.component';

describe('TsledgerComponent', () => {
  let component: TsledgerComponent;
  let fixture: ComponentFixture<TsledgerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TsledgerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TsledgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
