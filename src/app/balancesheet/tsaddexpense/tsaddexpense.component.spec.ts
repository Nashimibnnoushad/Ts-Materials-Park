import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TsaddexpenseComponent } from './tsaddexpense.component';

describe('TsaddexpenseComponent', () => {
  let component: TsaddexpenseComponent;
  let fixture: ComponentFixture<TsaddexpenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TsaddexpenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TsaddexpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
