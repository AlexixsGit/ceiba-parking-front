import { Component, OnInit } from '@angular/core';
import { Parking } from '../model/Parking.model';
import { QueryVehicleService } from './query-vehicle.service';

@Component({
  selector: 'app-query-vehicle',
  templateUrl: './query-vehicle.component.html',
  styleUrls: ['./query-vehicle.component.css'],
  providers: [QueryVehicleService]

})
export class QueryVehicleComponent implements OnInit {

  private vehicleList: Parking[];
  private vehicleFiltered: Parking[];
  private plaque: string;

  constructor(private queryVehicleService: QueryVehicleService) {

  }

  ngOnInit() {
    this.loadVehicles();
  }


  private loadVehicles(): void {
    this.queryVehicleService.loadVehicles().subscribe(res => {
      this.vehicleList = res.list;
    });
  }

}
