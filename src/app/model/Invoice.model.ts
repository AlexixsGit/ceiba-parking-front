import { ParentEntity } from "./ParentEntity.model";

export class Invoice extends ParentEntity {

    public plaque: string;

    public descVehicleType: string;

    public engineCapacity: number;

    public employee: string;

    public iva: number;

    public additionalCost: number;

    public subtotal: number;

    public total: number;
    public creationDate: Date;

    public entryDate: Date;

    public departureDate: Date;

    public totalTime: number;
}