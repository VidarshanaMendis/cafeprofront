import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminrestaurantregisterComponent } from './adminrestaurantregister.component';

describe('AdminrestaurantregisterComponent', () => {
  let component: AdminrestaurantregisterComponent;
  let fixture: ComponentFixture<AdminrestaurantregisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminrestaurantregisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminrestaurantregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
