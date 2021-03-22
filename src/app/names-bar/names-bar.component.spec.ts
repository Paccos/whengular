import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NamesBarComponent } from './names-bar.component';

describe('NamesBarComponent', () => {
  let component: NamesBarComponent;
  let fixture: ComponentFixture<NamesBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NamesBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NamesBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
