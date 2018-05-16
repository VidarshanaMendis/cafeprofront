import { TestBed, inject } from '@angular/core/testing';

import { RestaurantdataService } from './restaurantdata.service';

describe('RestaurantdataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RestaurantdataService]
    });
  });

  it('should be created', inject([RestaurantdataService], (service: RestaurantdataService) => {
    expect(service).toBeTruthy();
  }));
});
