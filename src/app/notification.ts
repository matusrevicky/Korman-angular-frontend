import { Bicycle } from './bicycle';
import { Agent } from './agent';

export class Notification {

    public id: number;
    public createdAt: Date;
    public emailSent: boolean;
    public agent: Agent;
    public bicycle: Bicycle;

    constructor() {
        this.id = null;
        this.createdAt = null;
        this.emailSent = false;
        this.agent = null;
        this.bicycle = null;
    }

}





 