import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { EnterVehicleComponent } from './enter-vehicle/enter-vehicle.component';
import { DepartureVehicleComponent } from './departure-vehicle/departure-vehicle.component';
import { QueryVehicleComponent } from './query-vehicle/query-vehicle.component';


@NgModule({
  declarations: [
    AppComponent,
    EnterVehicleComponent,
    DepartureVehicleComponent,
    QueryVehicleComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
