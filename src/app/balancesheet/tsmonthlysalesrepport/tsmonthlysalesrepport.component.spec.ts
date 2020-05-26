import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TsmonthlysalesrepportComponent } from './tsmonthlysalesrepport.component';

describe('TsmonthlysalesrepportComponent', () => {
  let component: TsmonthlysalesrepportComponent;
  let fixture: ComponentFixture<TsmonthlysalesrepportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TsmonthlysalesrepportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TsmonthlysalesrepportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
