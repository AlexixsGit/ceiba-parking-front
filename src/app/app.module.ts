import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { EnterVehicleComponent } from './enter-vehicle/enter-vehicle.component';
import { DepartureVehicleComponent } from './departure-vehicle/departure-vehicle.component';
import { QueryVehicleComponent } from './query-vehicle/query-vehicle.component';
import { ParkingSearchPipe } from './custom-pipes/parking-search-pipe';


@NgModule({
  declarations: [
    AppComponent,
    EnterVehicleComponent,
    DepartureVehicleComponent,
    QueryVehicleComponent,
    ParkingSearchPipe
  ],
  imports: [
    BrowserModule, AppRoutingModule, FormsModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
