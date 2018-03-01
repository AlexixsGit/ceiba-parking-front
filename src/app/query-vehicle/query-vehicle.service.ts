import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { RestResponse } from '../util/rest-response.model';
import { QueryResult } from '../util/query-result.model';
import { Parking } from '../model/Parking.model';

@Injectable()
export class QueryVehicleService {

  constructor(private http: HttpClient) { }


  public loadVehicles(): Observable<QueryResult<Parking>> {
    return this.http.get<QueryResult<Parking>>("http://localhost:8080/parking/getParkingList");
  }
}
