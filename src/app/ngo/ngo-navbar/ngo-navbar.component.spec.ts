import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgoNavbarComponent } from './ngo-navbar.component';

describe('NgoNavbarComponent', () => {
  let component: NgoNavbarComponent;
  let fixture: ComponentFixture<NgoNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgoNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgoNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
