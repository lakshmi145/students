import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BindinggComponent } from './bindingg.component';

describe('BindinggComponent', () => {
  let component: BindinggComponent;
  let fixture: ComponentFixture<BindinggComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BindinggComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BindinggComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
