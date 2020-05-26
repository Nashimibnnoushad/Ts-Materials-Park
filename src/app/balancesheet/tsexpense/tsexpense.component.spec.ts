import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TsexpenseComponent } from './tsexpense.component';

describe('TsexpenseComponent', () => {
  let component: TsexpenseComponent;
  let fixture: ComponentFixture<TsexpenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TsexpenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TsexpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
