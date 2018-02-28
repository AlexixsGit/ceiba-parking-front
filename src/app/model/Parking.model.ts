import { ParentEntity } from "./ParentEntity.model";
import { VehicleType } from "./VehicleType.model";

export class Parking extends ParentEntity {
    public vehicleType: VehicleType;
    public plaque: string;
    public entryDate: Date;
    public entryHour: string;
    public departureDate: Date;
    public departureHour: string;
    public engineCapacity: number;
    public isNew: boolean;
}