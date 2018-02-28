import { ParentEntity } from "./ParentEntity.model";
import { VehicleType } from "./VehicleType.model";

export class Admin extends ParentEntity {

    public hoursForADay: number;
    public capacity: number;
    public vehicleType: VehicleType;
    public engineCapacity: number;
    public restrictPlaqueLetter: string;
}