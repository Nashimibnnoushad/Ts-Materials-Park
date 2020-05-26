import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TsexpenceledgerComponent } from './tsexpenceledger.component';

describe('TsexpenceledgerComponent', () => {
  let component: TsexpenceledgerComponent;
  let fixture: ComponentFixture<TsexpenceledgerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TsexpenceledgerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TsexpenceledgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
