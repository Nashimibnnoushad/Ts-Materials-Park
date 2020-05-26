import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TsledgerlistComponent } from './tsledgerlist.component';

describe('TsledgerlistComponent', () => {
  let component: TsledgerlistComponent;
  let fixture: ComponentFixture<TsledgerlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TsledgerlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TsledgerlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
