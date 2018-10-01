import { Session1 } from '../../public/src/index'


describe ('Iterators', function () {
    describe('You can iterate collections/array in a different way', function () {
        it('Should iterate a collection using "for of"', function () {
            for (let foo of Session1.Iterators.falsies) {
                expect(foo).toBeFalsy();
            }
        })
        it('Should be the same item iterated when you iterate with traditional for', function () {
            let i = 0;
            for (let foo of Session1.Iterators.truthies) {
                expect(foo).toEqual(Session1.Iterators.truthies[i++]);
            }
        })
    })
})