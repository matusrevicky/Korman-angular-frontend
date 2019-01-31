import { BicycleCategory } from './bicycleCategory';

export class Bicycle {
    public id: number;
    public externalId: string;
    public series: string;
    public size: string;
    public wmn: boolean;
    public price: number;
    public diff: number;
    public modelYear: number;
    public url: string;
    public photoUrl: string;
    public createdAt: Date;
    public importedAt: Date;

    private _category: BicycleCategory;
    constructor() {
        this.id = null;
        this.externalId = "";
        this.series = "";
        this.size = "";
        this.wmn = false;
        this.price = null;
        this.diff = null;
        this.modelYear = null;
        this.url = "";
        this.photoUrl = "";
        this.createdAt = null;
        this.importedAt = null;

    }

    get bicycleCategory() {
        return this._category;
    }

    set bicycleCategory(c:BicycleCategory) {
        this._category = c
    }

}