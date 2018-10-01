import { PHI, obj } from '../../public/src/session-1/excercise';
import * as Ex1 from '../../public/src/session-1/excercise';

function isPhi(phi) {
    return Math.pow(phi, 2) - phi - 1 === 0;
}

describe('Excercise 1', function () {
    it('Should import the PHI constant, and being a valid PHI number', function () {
        expect(PHI).toBeDefined()
        expect(isPhi(PHI)).toBeTruthy();
    })
    it('Should import an object that has a property method that generates an array with "n" values with value "0~n-1". If n value is not present, return an empty array.', function () {
        expect(obj).toBeDefined();

        expect(obj.generateArray().length).toBe(0);

        expect(obj.generateArray(10).length).toBe(10);
        let i = 0;
        for (let foo of obj.generateArray(10)) {
            expect(foo).toBe(i++);
        }
    })
    it ('Should import PHI and array method in obj variable with Ex1 alias', function () {
        expect(Ex1).toBeDefined();
        
        expect(Ex1.PHI).toBeDefined();
        expect(isPhi(Ex1.PHI)).toBeTruthy();

        expect(Ex1.obj).toBeDefined();

        expect(Ex1.obj.generateArray().length).toBe(0);

        expect(Ex1.obj.generateArray(10).length).toBe(10);
        let i = 0;
        for (let foo of Ex1.obj.generateArray(10)) {
            expect(foo).toBe(i++);
        }
    })
})