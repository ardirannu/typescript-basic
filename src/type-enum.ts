// export enum CustomerType { //enum number
//     REGULER,
//     GOLD,
//     PLATINUM,
// }

export enum CustomerType { //enum string
    REGULER = 'REGULER',
    GOLD = 'GOLD',
    PLATINUM = 'PLATINUM',
}

export type Customer = {
    id: number;
    name: string;
    type: CustomerType;
}