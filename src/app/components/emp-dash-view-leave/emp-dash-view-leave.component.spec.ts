import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpDashViewLeaveComponent } from './emp-dash-view-leave.component';

describe('EmpDashViewLeaveComponent', () => {
  let component: EmpDashViewLeaveComponent;
  let fixture: ComponentFixture<EmpDashViewLeaveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmpDashViewLeaveComponent]
    });
    fixture = TestBed.createComponent(EmpDashViewLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
