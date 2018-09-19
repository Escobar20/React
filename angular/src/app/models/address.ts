export class Address {
    street?: string;
    city?: string;
    state: string;
    zipCode: string;

    constructor() {
        this.state = '';
        this.zipCode = '';
    }
}
