import { RestParameters } from '../../public/src/session-2/';

describe('Rest parameters', function () {
    describe(`Specifying the parameters of a function with three dots;
    Enables the function to invoke it with many parameters and those parameters could be handled as an array on the function`, function () {
            it('Calculates the sum of n elements', function () {
                expect(RestParameters.sum()).toBe(0);
                expect(RestParameters.sum(1, 2)).toBe(3);
            });
        });

    describe(`You can use parameters before rest parameters`, function () {
        it('Returns an array multiplied by n', function () {
            expect(RestParameters.multiplier(
                2, 
                2, 2)
            ).toEqual(
                [4, 4]
            )
        })
    })
})