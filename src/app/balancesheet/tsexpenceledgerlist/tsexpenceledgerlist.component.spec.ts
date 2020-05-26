import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TsexpenceledgerlistComponent } from './tsexpenceledgerlist.component';

describe('TsexpenceledgerlistComponent', () => {
  let component: TsexpenceledgerlistComponent;
  let fixture: ComponentFixture<TsexpenceledgerlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TsexpenceledgerlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TsexpenceledgerlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
