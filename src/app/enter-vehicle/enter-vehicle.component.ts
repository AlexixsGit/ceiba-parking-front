import { Component, OnInit } from '@angular/core';
import { Parking } from '../model/Parking.model';
import { VehicleType } from '../model/VehicleType.model';
import { RestResponse } from '../util/rest-response.model';
import { EnterVehicleService } from './enter-vehicle.service';

@Component({
  selector: 'app-enter-vehicle',
  templateUrl: './enter-vehicle.component.html',
  styleUrls: ['./enter-vehicle.component.css'],
  providers: [EnterVehicleService]
})
export class EnterVehicleComponent implements OnInit {

  private plaque: string = "";
  private vehicleTypeId: string = '1';
  private engine: number = 0;
  private entryDate: string;
  private parking: Parking;
  private vehicleType: VehicleType;
  private isRunning: boolean = false;
  private isValid: boolean = true;
  private isSuccess: boolean = false;
  private message: string;
  private showVehicleType: boolean = false;

  constructor(private enterVehicleService: EnterVehicleService) {
    this.parking = new Parking();
    this.vehicleType = new VehicleType();
  }

  ngOnInit() {
  }

  public save(): void {
    this.isSuccess = false;
    this.isValid = false;
    this.complete();
    this.isValid = this.enterVehicleService.validate(this.parking);
    if (this.isValid) {
      this.isRunning = true;
      this.enterVehicleService.saveOrUpdate(this.parking).subscribe(res => {
        this.isRunning = false;

        if (res.entity) {
          this.isSuccess = true;
          this.message = res.message;
          this.clear();
        } else {
          this.isValid = false;
          this.message = res.message;
        }

      })

    } else {
      this.message = "Ingresa los datos obligatorios";
    }

  }

  public clearValidations(): void {
    this.isRunning = false;
    this.isSuccess = false;
    this.isValid = true;
  }


  private complete(): void {
    this.vehicleType.id = JSON.parse(this.vehicleTypeId);
    this.vehicleType.description = "";
    this.parking.plaque = this.plaque;
    this.parking.engineCapacity = this.engine;
    this.parking.vehicleType = this.vehicleType;
    this.parking.entryDate = new Date(this.entryDate);
  }

  private clear(): void {
    this.vehicleType = new VehicleType();
    this.parking = new Parking();
    this.plaque = "";
    this.vehicleTypeId = '1';
    this.engine = 0;
    this.entryDate = '';
  }




}
