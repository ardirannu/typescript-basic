describe('Any', function() {
    it('should support in typescript', function () {
        const person: any = {
            id: 1,
            name: "Ardi",
            age: 25
        };

        person.age = 26;
        console.info(person.age);
    });
});