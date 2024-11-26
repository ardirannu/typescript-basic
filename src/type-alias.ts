export type Category = {
    id: string;
    name: string;
    desc?: string; //optional ?
}

export type Product = {
    id: string;
    name: string;
    price: number;
    category?: Category;
}