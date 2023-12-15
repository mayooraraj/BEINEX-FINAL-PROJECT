import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpsidebarComponent } from './empsidebar.component';

describe('EmpsidebarComponent', () => {
  let component: EmpsidebarComponent;
  let fixture: ComponentFixture<EmpsidebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmpsidebarComponent]
    });
    fixture = TestBed.createComponent(EmpsidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
