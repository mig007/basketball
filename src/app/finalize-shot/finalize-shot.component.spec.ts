import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalizeShotComponent } from './finalize-shot.component';

describe('FinalizeShotComponent', () => {
  let component: FinalizeShotComponent;
  let fixture: ComponentFixture<FinalizeShotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinalizeShotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalizeShotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
