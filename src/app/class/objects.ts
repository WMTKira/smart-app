export class User {
    id!: number;
    userName!: string;
    email!: string;
    status!: string;
    lastLogin: any;
}


export class Parking {
    lotId!: string;
    location!: string;
    capacity!: number;
    stateTypeStr!: string;
}