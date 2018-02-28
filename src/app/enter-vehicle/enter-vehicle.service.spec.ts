import { TestBed, inject } from '@angular/core/testing';

import { EnterVehicleService } from './enter-vehicle.service';

describe('EnterVehicleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EnterVehicleService]
    });
  });

  it('should be created', inject([EnterVehicleService], (service: EnterVehicleService) => {
    expect(service).toBeTruthy();
  }));
});
