describe('Function', function() {
    it('should support in typescript', function () {

        //function return value
        function sayHello(name: string): string {
            return `Hello ${name}`;
        }

        expect(sayHello("Ardi")).toBe("Hello Ardi");

        //function not return value, use void
        function printHello(name: string): void {
            console.info(`Hello ${name}`);
        }

        printHello("Ardi");
    });
   
    it('should support default & optional value', function () {

        //function parameter with default & optional value
        function sayHello(name: string = "Guest", lastName?: string): string {
            if(lastName){
                return `Hello ${name} ${lastName}`;
            }else{
                return `Hello ${name}`;
            }
        }

        expect(sayHello()).toBe("Hello Guest");
        expect(sayHello("Ardi")).toBe("Hello Ardi");
        expect(sayHello("Ardi", "Rannu")).toBe("Hello Ardi Rannu");

    });
   
    it('should support rest parameter', function () {

        //function parameter with rest parameter
        function sum(...values: number[]): number {
            let total = 0;
            for (const value of values){
                total += value;
            }
            return total;
        }

        expect(sum(1,2,3,4,5)).toBe(15);
    });
});