describe('Array', function () {
    it('should same with javascript', function () {
        const names: string[] = ['Ardi', 'Budi', 'Bambang']; //tipe data array yg isinya type data string
        const values: number[] = [1, 3, 5]; //tipe data array yg isinya type data number

        console.info(names);
        console.info(values);
    });
});

describe('Tupple', function () {
    it('should support tupple', function () {
        const person: readonly [string, string, number] = ['Ardi', 'Makassar', 25]; //tipe data tupple, readonly & panjang dan type data value array sdh ditentukan
        
        console.info(person);
    });
});