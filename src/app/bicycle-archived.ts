import { BicycleCategory } from './bicycleCategory';
import {Bicycle} from './bicycle';

export class ArchivedBicycle extends Bicycle {
    public archivedAt: Date;
    
    constructor() {
       super();
       this.archivedAt = null;
    }

    
}