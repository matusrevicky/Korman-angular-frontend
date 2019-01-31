import { BicycleCategory } from './bicycleCategory';

export class Agent {
 
    public id: number;
    public name: string;
    public email: string;
    public series: string;
    public size: string;
    public wmn: boolean;
    public minPrice: number;
    public maxPrice: number;
    public minDiff: number;
    public modelYear: number;
    public lastCheck: Date;
    public active: boolean;

    public category: BicycleCategory;
    constructor() {
        this.id = null;
        this.name = "";
        this.email = "";
        this.series = "";
        this.size = "M";
        this.wmn = false;
        this.minPrice = null;
        this.maxPrice = null;
        this.minDiff = null;
        this.modelYear = null;
        this.lastCheck = new Date("1970-01-01T00:00:00.000+0000");
        this.active = false;
        this.category = new BicycleCategory(1,"","","");
    }

    

}