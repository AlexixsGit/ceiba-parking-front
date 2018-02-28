import { Injectable } from '@angular/core';
import { Parking } from '../model/Parking.model';
import { HttpClient } from "@angular/common/http";

import { RestResponse } from '../util/rest-response.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class EnterVehicleService {

  constructor(private http: HttpClient) { }

  public saveOrUpdate(parking: Parking): Observable<RestResponse> {
    return this.http.post<RestResponse>("http://localhost:8080/parking/saveOrUpdate", JSON.stringify(parking));
  }

  public validate(parking: Parking): boolean {
    let isValid = true;

    if (parking.plaque.length == 0) {
      isValid = false;
    }
    if (parking.vehicleType.id == 0) {
      isValid = false;
    } else if (parking.vehicleType.id == 2 && parking.engineCapacity == 0) {
      isValid = false;
    }
    return isValid;
  }
}
