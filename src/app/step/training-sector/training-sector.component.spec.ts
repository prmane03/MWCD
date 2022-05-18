import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingSectorComponent } from './training-sector.component';

describe('TrainingSectorComponent', () => {
  let component: TrainingSectorComponent;
  let fixture: ComponentFixture<TrainingSectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingSectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingSectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
