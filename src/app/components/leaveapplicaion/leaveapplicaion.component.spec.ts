import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveapplicaionComponent } from './leaveapplicaion.component';

describe('LeaveapplicaionComponent', () => {
  let component: LeaveapplicaionComponent;
  let fixture: ComponentFixture<LeaveapplicaionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeaveapplicaionComponent]
    });
    fixture = TestBed.createComponent(LeaveapplicaionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
