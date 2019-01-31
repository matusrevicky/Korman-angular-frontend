export class BicycleCategory {
    constructor(
        public id: number,
        public name: String,
        public externalUrl: String,
        public externalDetailUrl: String,
    ) { }

    public clone(){
        return new BicycleCategory(this.id,this.name,this.externalUrl,this.externalDetailUrl)
    }
}