import { Address } from './address';

export class Contact {
    id: number;
    name: string;
    user?: string;
    email: string;
    address: Address;
    phone?: string;
    picture?: string;

    constructor() {
        this.id = 1;
        this.name = '';
        this.email = '';
        this.address = new Address();
    }
}
