import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgoinfoComponent } from './ngoinfo.component';

describe('NgoinfoComponent', () => {
  let component: NgoinfoComponent;
  let fixture: ComponentFixture<NgoinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgoinfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgoinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
