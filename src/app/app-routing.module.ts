import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EnterVehicleComponent } from './enter-vehicle/enter-vehicle.component';
import { DepartureVehicleComponent } from './departure-vehicle/departure-vehicle.component';
import { QueryVehicleComponent } from './query-vehicle/query-vehicle.component';

const routes: Routes = [
    { path: '', redirectTo: '/enterVehicleComponent', pathMatch: 'full' },
    { path: 'enterVehicleComponent', component: EnterVehicleComponent },
    { path: 'departureVehicleComponent', component: DepartureVehicleComponent },
    { path: 'queryVehicleComponent', component: QueryVehicleComponent }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
