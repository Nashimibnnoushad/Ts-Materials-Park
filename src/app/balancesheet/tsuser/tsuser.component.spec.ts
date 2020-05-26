import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TsuserComponent } from './tsuser.component';

describe('TsuserComponent', () => {
  let component: TsuserComponent;
  let fixture: ComponentFixture<TsuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TsuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TsuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
