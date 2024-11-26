import { CustomerType } from "../src/type-enum";
describe('Alias', function () {
    it('should support in typescript', function () {
        const customer = {
            id: 1,
            name: "Ardi",
            type: CustomerType.GOLD
        };
        console.info(customer);
    });
});
