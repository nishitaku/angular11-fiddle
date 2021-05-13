import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultStrategyComponent } from './default-strategy.component';

describe('DefaultStrategyComponent', () => {
  let component: DefaultStrategyComponent;
  let fixture: ComponentFixture<DefaultStrategyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DefaultStrategyComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultStrategyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
