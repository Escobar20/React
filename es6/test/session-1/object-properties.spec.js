import { ObjectProperties } from '../../public/src/session-1'

function hash(seed, count = 5) {
    let word = btoa(seed);
    return word.substr(word.length - count, word.length);
}

describe('Object properties', function () {
    it('We can attach properties shorthanded', function () {
        let foo = false, bar = '', xfz = 0;

        Object.assign(ObjectProperties.bar, { foo });
        expect(ObjectProperties.bar.foo).toBe(foo);

        Object.assign(ObjectProperties.foo, { bar, xfz });
        expect(ObjectProperties.foo.bar).toBe(bar);
        expect(ObjectProperties.foo.xfz).toBe(xfz);
    });

    describe('Computed properties', function () {
        it('We can create several variables from an iteration', function () {
            let manyVariables = 5;

            for (let i = 1; i <= manyVariables; i += 1) {
                Object.assign(ObjectProperties.xfz, {
                    [`variable${i}`]: Math.ceil(Math.random() * Math.pow(10, i))
                });
            }

            expect(ObjectProperties.xfz.variable1).toBeDefined();
            expect(ObjectProperties.xfz.variable2).toBeDefined();
            expect(ObjectProperties.xfz.variable3).toBeDefined();
            expect(ObjectProperties.xfz.variable4).toBeDefined();
            expect(ObjectProperties.xfz.variable5).toBeDefined();
        });

        it('We can compute a variable from the value on certain variable', function () {

            let randomWorld = hash(Date.now());
            Object.assign(ObjectProperties.xfz, {
                [randomWorld]: 'random'
            });
            expect(ObjectProperties.xfz[randomWorld]).toBeDefined();
            expect(ObjectProperties.xfz[randomWorld]).toBe('random');
        });

        it('We can compute a variable from an expression', function () {
            Object.assign(ObjectProperties.xfz, {
                [hash('Lorem ipsum', 1)]: 0
            });
            expect(ObjectProperties.xfz[hash('Lorem ipsum', 1)]).toBeDefined();
            expect(ObjectProperties.xfz[hash('Lorem ipsum', 1)]).toBe(0);
        })
    });


    it('We can attach methods to an on-fly object in a different manner than previous versions', function () {
        Object.assign(ObjectProperties.xfz, {
            callee(args) {
                console.log(args);
            },
            callee2() {
                throw new Error();
            },
            callee3() {
                return 1;
            }
        });
        expect(ObjectProperties.xfz.callee).toBeDefined();

        expect(ObjectProperties.xfz.callee2).toBeDefined();
        expect(ObjectProperties.xfz.callee2).toThrowError();
        
        expect(ObjectProperties.xfz.callee3).toBeDefined();
        expect(ObjectProperties.xfz.callee3()).toBe(1);

    })
});