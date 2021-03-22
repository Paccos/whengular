import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YesMaybeCounterComponent } from './yes-maybe-counter.component';

describe('YesMaybeCounterComponent', () => {
  let component: YesMaybeCounterComponent;
  let fixture: ComponentFixture<YesMaybeCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YesMaybeCounterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YesMaybeCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
