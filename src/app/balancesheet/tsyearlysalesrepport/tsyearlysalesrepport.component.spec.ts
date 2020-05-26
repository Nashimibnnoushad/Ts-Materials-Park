import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TsyearlysalesrepportComponent } from './tsyearlysalesrepport.component';

describe('TsyearlysalesrepportComponent', () => {
  let component: TsyearlysalesrepportComponent;
  let fixture: ComponentFixture<TsyearlysalesrepportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TsyearlysalesrepportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TsyearlysalesrepportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
