import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostelLocationComponent } from './hostel-location.component';

describe('HostelLocationComponent', () => {
  let component: HostelLocationComponent;
  let fixture: ComponentFixture<HostelLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HostelLocationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HostelLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
