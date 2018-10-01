import { Session1 } from '../../public/src/index'

function hash(seed, count = 5) {
    let word = btoa(seed);
    return word.substr(word.length - count, word.length);
}

describe('Object properties', function () {
    it('We can attach properties shorthanded', function () {
        let foo = false, bar = '', xfz = 0;

        Object.assign(Session1.ObjectProperties.bar, { foo });
        expect(Session1.ObjectProperties.bar.foo).toBe(foo);

        Object.assign(Session1.ObjectProperties.foo, { bar, xfz });
        expect(Session1.ObjectProperties.foo.bar).toBe(bar);
        expect(Session1.ObjectProperties.foo.xfz).toBe(xfz);
    });

    describe('Computed properties', function () {
        it('We can create several variables from an iteration', function () {
            let manyVariables = 5;

            for (let i = 1; i <= manyVariables; i += 1) {
                Object.assign(Session1.ObjectProperties.xfz, {
                    [`variable${i}`]: Math.ceil(Math.random() * Math.pow(10, i))
                });
            }

            expect(Session1.ObjectProperties.xfz.variable1).toBeDefined();
            expect(Session1.ObjectProperties.xfz.variable2).toBeDefined();
            expect(Session1.ObjectProperties.xfz.variable3).toBeDefined();
            expect(Session1.ObjectProperties.xfz.variable4).toBeDefined();
            expect(Session1.ObjectProperties.xfz.variable5).toBeDefined();
        });

        it('We can compute a variable from the value on certain variable', function () {

            let randomWorld = hash(Date.now());
            Object.assign(Session1.ObjectProperties.xfz, {
                [randomWorld]: 'random'
            });
            expect(Session1.ObjectProperties.xfz[randomWorld]).toBeDefined();
            expect(Session1.ObjectProperties.xfz[randomWorld]).toBe('random');
        });

        it('We can compute a variable from an expression', function () {
            Object.assign(Session1.ObjectProperties.xfz, {
                [hash('Lorem ipsum', 1)]: 0
            });
            expect(Session1.ObjectProperties.xfz[hash('Lorem ipsum', 1)]).toBeDefined();
            expect(Session1.ObjectProperties.xfz[hash('Lorem ipsum', 1)]).toBe(0);
        })
    });


    it('We can attach methods to an on-fly object in a different manner than previous versions', function () {
        Object.assign(Session1.ObjectProperties.xfz, {
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
        expect(Session1.ObjectProperties.xfz.callee).toBeDefined();

        expect(Session1.ObjectProperties.xfz.callee2).toBeDefined();
        expect(Session1.ObjectProperties.xfz.callee2).toThrowError();
        
        expect(Session1.ObjectProperties.xfz.callee3).toBeDefined();
        expect(Session1.ObjectProperties.xfz.callee3()).toBe(1);

    })
});