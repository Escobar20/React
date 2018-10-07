function isPhi(phi) {
    return Math.pow(phi, 2) - phi - 1 === 0;
}

fdescribe('Excercise 1', function () {
    describe('Should import the PHI constant, and being a valid PHI number', function () {
        it('Should exists PHI', function () {
            expect(PHI).toBeDefined()
        })
        it('Should be a valid PHI number', function () {
            expect(isPhi(PHI)).toBeTruthy();
        })
    })
    describe('Should import an object that has a property method that generates an array with "n" values with value "0~n-1". If n value is not present, return an empty array.', function () {
        it('Should exists the obj', function () {
            expect(obj).toBeDefined();
        })
        it('Should return an empty array when no input is given', function () {
            expect(obj.generateArray().length).toBe(0);
        })

        it('Should returns an array of ten elements when each item is equal to their index', function () {

            expect(obj.generateArray(10).length).toBe(10);
            let i = 0;
            for (let foo of obj.generateArray(10)) {
                expect(foo).toBe(i++);
            }
        })
    })
    describe('Should import PHI and array method in obj variable with Ex1 alias', function () {
        describe('From Ex1 alias', function () {

            it('Should exists Alias', function () {
                expect(Ex1).toBeDefined();
            })
            it('Should exists PHI', function () {

                expect(Ex1.PHI).toBeDefined();
            });
            it('Should be a valid PHI number', function () {
                expect(isPhi(Ex1.PHI)).toBeTruthy();
            })

            it('Should exists the obj', function () {
                expect(Ex1.obj).toBeDefined();
            });

            it('Should return an empty array when no input is given', function () {
                expect(Ex1.obj.generateArray().length).toBe(0);
            });

            it('Should returns an array of ten elements when each item is equal to their index', function () {
                expect(Ex1.obj.generateArray(10).length).toBe(10);
                let i = 0;
                for (let foo of Ex1.obj.generateArray(10)) {
                    expect(foo).toBe(i++);
                }
            });
        })
    })
})