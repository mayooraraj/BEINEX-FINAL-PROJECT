import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardViewleaveComponent } from './card-viewleave.component';

describe('CardViewleaveComponent', () => {
  let component: CardViewleaveComponent;
  let fixture: ComponentFixture<CardViewleaveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardViewleaveComponent]
    });
    fixture = TestBed.createComponent(CardViewleaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
