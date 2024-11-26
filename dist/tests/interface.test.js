describe('Interface', function () {
    it('should support in typescript', function () {
        const seller = {
            id: 1,
            name: "Toko ABC",
            address: "Jl. Sudirman",
            npwp: "KLJU4269INTG"
        };
        console.info(seller);
    });
    it('should support function interface', function () {
        const add = (value1, value2) => {
            return value1 + value2;
        };
        expect(add(1, 2)).toBe(3);
    });
    it('should support extends interface', function () {
        const employee = {
            id: "1",
            name: "Ardi",
            division: "IT",
        };
        console.info(employee);
        const manager = {
            id: "1",
            name: "Ardi",
            division: "IT",
            numberOfEmployees: 5
        };
        console.info(manager);
    });
    it('should support intersection type', function () {
        const person = {
            id: "1",
            name: "Ardi"
        };
        console.info(person);
    });
});
export {};
