import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { RestResponse } from '../util/rest-response.model';
import { Observable } from 'rxjs/Observable';
import { Parking } from '../model/Parking.model';
import { QueryResult } from '../util/query-result.model';

@Injectable()
export class DepartureVehicleService {

  constructor(private http: HttpClient) { }

  public validate(plaque: string): boolean {

    let isValid = true;

    if (plaque.length === 0) {
      isValid = false;
    }
    return isValid;
  }

  public departureVehicle(parking: Parking): Observable<RestResponse> {
    return this.http.post<RestResponse>("http://localhost:8080/parking/saveOrUpdate", JSON.stringify(parking));
  }


  public createInvoice(parking: Parking): Observable<RestResponse> {
    return this.http.post<RestResponse>("http://localhost:8080/invoice/saveOrUpdate", JSON.stringify(parking));
  }

  public getParkingByPlaque(plaque: string): Observable<QueryResult<Parking>> {
    return this.http.get<QueryResult<Parking>>("http://localhost:8080/parking/getParkingListByPlaque?plaque=" + plaque);
  }
}
