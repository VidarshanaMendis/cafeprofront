import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurentregComponent } from './restaurentreg.component';

describe('RestaurentregComponent', () => {
  let component: RestaurentregComponent;
  let fixture: ComponentFixture<RestaurentregComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurentregComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurentregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
