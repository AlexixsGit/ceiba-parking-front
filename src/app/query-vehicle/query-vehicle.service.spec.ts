import { TestBed, inject } from '@angular/core/testing';

import { QueryVehicleService } from './query-vehicle.service';

describe('QueryVehicleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QueryVehicleService]
    });
  });

  it('should be created', inject([QueryVehicleService], (service: QueryVehicleService) => {
    expect(service).toBeTruthy();
  }));
});
