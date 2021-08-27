import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameClockComponent } from './game-clock.component';

describe('GameClockComponent', () => {
  let component: GameClockComponent;
  let fixture: ComponentFixture<GameClockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameClockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameClockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
