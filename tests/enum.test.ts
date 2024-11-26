import { Customer, CustomerType } from "../src/type-enum";

describe('Alias', function() {
    it('should support in typescript', function () {
        
        const customer: Customer = {
            id: 1,
            name: "Ardi",
            type: CustomerType.GOLD
        };

        console.info(customer);
    });
});