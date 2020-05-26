import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TsdailysalerepportComponent } from './tsdailysalerepport.component';

describe('TsdailysalerepportComponent', () => {
  let component: TsdailysalerepportComponent;
  let fixture: ComponentFixture<TsdailysalerepportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TsdailysalerepportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TsdailysalerepportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
