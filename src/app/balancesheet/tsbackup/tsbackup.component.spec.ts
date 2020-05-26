import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TsbackupComponent } from './tsbackup.component';

describe('TsbackupComponent', () => {
  let component: TsbackupComponent;
  let fixture: ComponentFixture<TsbackupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TsbackupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TsbackupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
