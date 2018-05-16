import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingcomComponent } from './ratingcom.component';

describe('RatingcomComponent', () => {
  let component: RatingcomComponent;
  let fixture: ComponentFixture<RatingcomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RatingcomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingcomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
