import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TspurchaseComponent } from './tspurchase.component';

describe('TspurchaseComponent', () => {
  let component: TspurchaseComponent;
  let fixture: ComponentFixture<TspurchaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TspurchaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TspurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
