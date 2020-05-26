import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TsvehicleComponent } from './tsvehicle.component';

describe('TsvehicleComponent', () => {
  let component: TsvehicleComponent;
  let fixture: ComponentFixture<TsvehicleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TsvehicleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TsvehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
