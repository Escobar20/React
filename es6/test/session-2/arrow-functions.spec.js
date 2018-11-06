import { ArrowFns, BuiltIn } from '../../public/src/session-2';

describe('Arrow functions', function () {
    it('Arrow functions, should not be declared as methods on plain object, they lose the context', function () {
        expect(ArrowFns.foo.get()).toBeFalsy();
        expect(ArrowFns.foo.bar).not.toEqual(ArrowFns.foo.get());
    });
    it('You should declare functions instead', function () {
        ArrowFns.foo.fn(2);
        expect(ArrowFns.foo.bar).toEqual(2);
    })
    it('Callback predicates can be added on array objects', function () {
        expect(BuiltIn.arr.filter(ArrowFns.callback).length).toBe(2);
    })
    it('this is a predicate that has a shorthand return value', function () {
        expect(ArrowFns.bar(2)).toBe(2);
        expect(ArrowFns.xfz(2)).toBe(2 * 2);
    })
})