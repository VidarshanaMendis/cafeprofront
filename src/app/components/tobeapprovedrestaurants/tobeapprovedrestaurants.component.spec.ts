import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TobeapprovedrestaurantsComponent } from './tobeapprovedrestaurants.component';

describe('TobeapprovedrestaurantsComponent', () => {
  let component: TobeapprovedrestaurantsComponent;
  let fixture: ComponentFixture<TobeapprovedrestaurantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TobeapprovedrestaurantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TobeapprovedrestaurantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
