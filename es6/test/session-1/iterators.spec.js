import { Iterators } from '../../public/src/session-1'


describe ('Iterators', function () {
    describe('You can iterate collections/array in a different way', function () {
        it('Should iterate a collection using "for of"', function () {
            for (let foo of Iterators.falsies) {
                expect(foo).toBeFalsy();
            }
        })
        it('Should be the same item iterated when you iterate with traditional for', function () {
            let i = 0;
            for (let foo of Iterators.truthies) {
                expect(foo).toEqual(Iterators.truthies[i++]);
            }
        })
    })
})