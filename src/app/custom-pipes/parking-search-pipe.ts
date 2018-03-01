import { Pipe, PipeTransform } from '@angular/core';
import { Parking } from '../model/Parking.model';

@Pipe({
    name: "parkingSearch",
    pure: false
})

export class ParkingSearchPipe implements PipeTransform {
    transform(items: Parking[], filter: string): any {
        if (!items || !filter) {
            return items;
        }
        return items.filter(item => item.plaque.toUpperCase().includes(filter.toUpperCase()));
    };
}