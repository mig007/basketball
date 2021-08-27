import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShotHistoryComponent } from './shot-history.component';

describe('ShotHistoryComponent', () => {
  let component: ShotHistoryComponent;
  let fixture: ComponentFixture<ShotHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShotHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShotHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
