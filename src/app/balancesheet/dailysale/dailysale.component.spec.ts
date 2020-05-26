import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailysaleComponent } from './dailysale.component';

describe('DailysaleComponent', () => {
  let component: DailysaleComponent;
  let fixture: ComponentFixture<DailysaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailysaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailysaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
