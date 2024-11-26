import { Employee, Manager } from "../src/extend";
import { Seller } from "../src/seller"

describe('Interface', function () {
    it('should support in typescript', function () {
        const seller: Seller = {
            id: 1,
            name: "Toko ABC",
            address: "Jl. Sudirman",
            npwp: "KLJU4269INTG"
        }

        console.info(seller);
    }); 

    it('should support function interface', function () {
        //interface function
        interface AddFunction {
            (value1: number, value2: number): number;
        }

        const add: AddFunction = (value1: number, value2: number): number => {
            return value1 + value2;
        }

        expect(add(1, 2)).toBe(3);
    })

    it('should support extends interface', function () {
        const employee: Employee = {
            id: "1",
            name: "Ardi",
            division: "IT",
        }

        console.info(employee);

        const manager: Manager = {
            id: "1",
            name: "Ardi",
            division: "IT",
            numberOfEmployees: 5
        }

        console.info(manager);

    });

    it('should support intersection type', function () {
        interface HasName {
            name: string;
        }

        interface HasId {
            id: string;
        }

        //intersection type / type yg dapat menggabungkan 2 interface, ditandai dengan &
        type Person = HasName & HasId;

        const person: Person = {
            id: "1",
            name: "Ardi"
        }
        
        console.info(person);
    });
});