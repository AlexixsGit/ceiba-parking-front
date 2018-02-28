import { TestBed, inject } from '@angular/core/testing';

import { DepartureVehicleService } from './departure-vehicle.service';

describe('DepartureVehicleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DepartureVehicleService]
    });
  });

  it('should be created', inject([DepartureVehicleService], (service: DepartureVehicleService) => {
    expect(service).toBeTruthy();
  }));
});
