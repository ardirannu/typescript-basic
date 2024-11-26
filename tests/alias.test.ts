import { Category, Product } from "../src/type-alias";

describe('Alias', function() {
    it('should support in typescript', function () {
        //dengan type data alias semua attribut harus sesuai dengan type alias yg sdh dibuat.
        
        const category: Category = {
            id: "1",
            name: "handphone",
            desc: "RAM 4GB", //optional based on type Category
        };

        const product: Product = {
            id: "1",
            name: "Samsung A55",
            price: 10000000,
            category: category,
        };

        console.info(category);
        console.info(product);
    });
});