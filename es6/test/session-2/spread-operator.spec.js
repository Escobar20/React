import { SpreadOperator } from '../../public/src/session-2';

describe('Spread Operator', function () {
    describe('You can fill a rest parametered function', function () {
        it('Calculates the average number from a sample', function () {
            const sample = [2, 2];
            expect(SpreadOperator.average(...sample)).toBe(2);

            expect(SpreadOperator.average()).toBe(0);
        });
    });
    describe('You can use it on arrays', function () {
        const sample = [6, 2];
        const sample2 = [3, 1]

        it('Should concatenate the two arrays', function () {
            expect([...sample, ...sample2]).toEqual([6, 2, 3, 1])
        });
        it('Should concateante the two arrays with an existing array', function () {
            expect([1, ...sample, 2, 3, ...sample2]).toEqual([1, 6, 2, 2, 3, 3, 1])
        });
    });
    /*/
    describe('You can use it on objects', function () {
        it('Should merge an object', function () {
            let obj = { foo: 3, bar: 1 };
            let obj2 = { xyz: 4 };

            expect(Object.assign(obj, obj2)).toEqual({ foo: 3, bar: 1, xyz: 4 });
        });
        it('When you merge an object with spread operator, you override the values', function () {
            let obj = { foo: 3, bar: 1 };
            let obj2 = { foo: 4, xyz: 4 };

            expect({ ...obj, ...obj2 }).not.toEqual({ foo: 3, bar: 1, xyz: 4 });
            expect({ ...obj, ...obj2 }).toEqual({ foo: 4, bar: 1, xyz: 4 });
            
        })
    })
    /*/
})