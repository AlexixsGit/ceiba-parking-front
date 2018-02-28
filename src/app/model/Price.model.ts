import { ParentEntity } from "./ParentEntity.model";
import { VehicleType } from "./VehicleType.model";

export class Price extends ParentEntity {
    public vehicleType: VehicleType;
    public hourPrice: number;
    public dayPrice: number;
    public highEnginePrice: number;

}