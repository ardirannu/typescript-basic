export interface Seller {
    id: number;
    name: string;
    address?: string;
    readonly npwp: string; //readonly tidak bisa diganti valuenya
}