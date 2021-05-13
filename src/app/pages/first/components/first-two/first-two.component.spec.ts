import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstTwoComponent } from './first-two.component';

describe('FirstTwoComponent', () => {
  let component: FirstTwoComponent;
  let fixture: ComponentFixture<FirstTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
