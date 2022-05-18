import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostelBookingComponent } from './hostel-booking.component';

describe('HostelBookingComponent', () => {
  let component: HostelBookingComponent;
  let fixture: ComponentFixture<HostelBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HostelBookingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HostelBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
