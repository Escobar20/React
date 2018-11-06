import { XtendedParameters } from '../../public/src/session-2/';

describe('Default parameters', function () {
    describe('We can set default parameters as single values', function () {

        describe('We will calculate the final price (sum +(1*tax)) where tax by default is 0.16', function () {
            it('Should calculate the final price with tax as 0.16', function () {
                expect(XtendedParameters.finalPrice(10)).toBe(11.6);
            })

            it('Should calculate the final price with tax defined by me', function () {
                expect(XtendedParameters.finalPrice(10, 0.16)).toBe(11.6);
            });
        })
    })
    describe('We can set default values as objects', function () {

        describe('We will format a response by adding the finalPrice in the response; by default, the format function expects an object with sum as 10 and tax as 0.16', function () {
            it('Should returns the final price with default values', function () {
                expect(XtendedParameters.formatResponse()).toEqual({
                    sum: 10,
                    tax: 0.16,
                    finalPrice: 11.6
                });


            })
            it('We will provide the sum (10) and the tax (0.16); we expect same value as last try', function () {
                expect(XtendedParameters.formatResponse({
                    sum: 10, tax: 0.16
                })).toEqual({
                    sum: 10,
                    tax: 0.16,
                    finalPrice: 11.6
                })
            });
        })
    })
    describe('We can omit parameters; if that parameter has default, the app will take it as value', function () {
        it('Should salute a man with no name', function () {
            expect(XtendedParameters.salute(undefined, false)).toBe('Hello Mr. ');
        })
        it('Should salute Ms. Lindsay', function () {
            expect(XtendedParameters.salute('Lindsay', undefined, 50)).toBe('Hello Ms. Lindsay');
        })
    })
})