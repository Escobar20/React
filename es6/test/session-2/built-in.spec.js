import { BuiltIn } from '../../public/src/session-2';

describe('New Object built-in methods', function () {
    describe('Object.keys', function () {
        it('Pulls the keys from an obj as an array', function () {
            expect(
                Object.keys(BuiltIn.obj)
            ).toEqual(['id', 'guid'])
            expect(BuiltIn.obj.id).toBeDefined();
            expect(BuiltIn.obj.guid).toBeDefined();
        })
    });
    describe('Object.assign', function () {
        it('Extend properties', function () {
            Object.assign(BuiltIn.obj, {
                xfz: 1
            })

            expect(
                BuiltIn.obj.hasOwnProperty('xfz')
            ).toBeTruthy()
        })

        it('Create a new instance of extend object', function () {
            let bar = Object.assign({}, BuiltIn.obj, {
                bar: true
            })

            expect(
                BuiltIn.obj.hasOwnProperty('bar')
            ).toBeFalsy()

            expect(
                bar.hasOwnProperty('bar')
            ).toBeTruthy()
        })
    });
})
describe('New Array built-in methods', function () {
    describe('Array.filter', function () {
        describe('It returns a new array filtered by specified criteria in predicate', function () {
            it('Returns an empty array when no criteria matches', function () {
                expect(
                    BuiltIn.arr.filter(item => item.guid === '').length
                ).toBe(0);
            })
            it('Returns a new array when criteria matches', function () {
                expect(
                    BuiltIn.arr.filter(item => item.guid[0] === '4').length
                ).toBe(2);
            })
            describe('You can use the index of each element in your predicate', function () {
                it('Should returns odd index elements on array', function () {
                    const filteredData = BuiltIn.arr.filter((item, index) => index % 2 == 0);
                    expect(
                        filteredData.length
                    ).toBe(Math.ceil(BuiltIn.arr.length / 2))
                });
            })
        })
    });
});
describe('Array.findIndex', function () {
    describe('It returns the index of specified item on array, basing the criteria on predicate', function () {
        it('Returns the index when item it is found', function () {
            expect(
                BuiltIn.arr.findIndex(item => item.guid === '4785902b-629c-4ce5-a0ea-7e53663752c8')
            ).toBe(6);
        })
        it('Returns an -1, when item it is not found', function () {
            const guid = '4785902b-629c-4ce5-a0ea-7e53663752c8';
            let idx = BuiltIn.arr.findIndex(item => item.guid === guid);

            BuiltIn.arr[idx] = '4785902b-629c-4ce5-a0ea-7e53663752c9';

            expect(
                BuiltIn.arr.findIndex(item => item.guid === guid)
            ).toBe(-1);
            BuiltIn.arr[idx] = guid;
        })
    })
});

describe('New string built-in methods', function () {
    beforeEach(function () {
        BuiltIn.str = `e${'h'.repeat(5)} f${'o'.repeat(5)}tball!`;
    })
    describe('String.repeat', function () {
        it('Should repeats a string, many times you specified', function () {

            expect(
                BuiltIn.str
            ).toBe('ehhhhh foooootball!')
        })
    });
    describe('String.startsWith', function () {
        describe('You can search from an initial position, by default is the very beginning', function () {

            it('Returns true when you can find certain string', function () {
                expect(
                    BuiltIn.str.startsWith('ehhhhh ')
                ).toBeTruthy();
            })
            it('Returns false when you can\'t find certain string', function () {
                expect(
                    BuiltIn.str.startsWith('h ')
                ).toBeFalsy();
            })
        })
        describe('You can search from an initial position', function () {
            it('Returns true when you can find certain string', function () {
                expect(
                    BuiltIn.str.startsWith('foooootball!', 7)
                ).toBeTruthy();
            })
            it('Returns false when you can\'t find certain string', function () {
                expect(
                    BuiltIn.str.startsWith('!', 0)
                ).toBeFalsy();
            })
        })
    });
    describe('String.endsWith', function () {
        describe('You can search certain string until a specified position, by default it\'s the length', function () {
            it('Returns true when you can find certain string', function () {
                expect(
                    BuiltIn.str.endsWith('foooootball!')
                ).toBeTruthy();
            })
            it('Returns false when you can\'t find certain string', function () {
                expect(
                    BuiltIn.str.endsWith('e')
                ).toBeFalsy();
            })
        })
        describe('You can search from an initial position to the length', function () {

            it('Returns true when you can find certain string', function () {
                expect(
                    BuiltIn.str.endsWith('all', BuiltIn.str.length - 1)
                ).toBeTruthy();
            })
            it('Returns true when you can find certain string', function () {
                expect(
                    BuiltIn.str.endsWith('e', 2)
                ).toBeFalsy();
            })

        })
    })
})
describe('New Number built-in methods', function () {
    describe('Number.isNaN', function () {
        describe('It indicates if a number is an illegal number', function () {
            it('Illegals', function () {
                expect(
                    isNaN(
                        new Date('')
                    )
                ).toBeTruthy();
                expect(
                    isNaN(
                        'f'
                    )
                ).toBeTruthy();
                expect(
                    isNaN(
                        {}
                    )
                ).toBeTruthy();
                expect(
                    isNaN(
                        NaN
                    )
                ).toBeTruthy();
                expect(
                    isNaN(
                        undefined
                    )
                ).toBeTruthy();
                expect(
                    isNaN(
                        0 / 0
                    )
                ).toBeTruthy();
            })
            it('Legals', function () {
                expect(
                    isNaN(
                        0xffff
                    )
                ).toBeFalsy()
                expect(
                    isNaN(
                        ''
                    )
                ).toBeFalsy()
                expect(
                    isNaN(
                        '1'
                    )
                ).toBeFalsy()
                expect(
                    isNaN(
                        new Date()
                    )
                ).toBeFalsy()
                expect(
                    isNaN(
                        1E10
                    )
                ).toBeFalsy()
                expect(
                    isNaN(
                        false
                    )
                ).toBeFalsy()
            })

        })
    })
    describe('Number.isFinite', function () {
        describe('Determines if a number is finite or not', function () {
            it('Finite', function () {
                expect(isFinite(1)).toBeTruthy();
                expect(isFinite('1')).toBeTruthy();
                expect(isFinite(false)).toBeTruthy();
                expect(isFinite('')).toBeTruthy();
                expect(isFinite(0xffffff)).toBeTruthy();
                expect(isFinite(1E100)).toBeTruthy();
                expect(isFinite(-Math.PI)).toBeTruthy();
                expect(isFinite(new Date())).toBeTruthy();
            })
            it('Infinite', function () {
                expect(isFinite('a')).toBeFalsy();
                expect(isFinite({})).toBeFalsy();
                expect(isFinite(new Date(''))).toBeFalsy();
                expect(isFinite(NaN)).toBeFalsy();
                expect(isFinite(Infinity)).toBeFalsy();
                expect(isFinite(-Infinity)).toBeFalsy();
            })
        })

    })
});
describe('New Math built-in methods', function () {
    describe('Math.sign', function () {
        it('Should returns an 1, when it\'s positive number', function () {
            expect(Math.sign(true)).toBe(1);
            expect(Math.sign(Infinity)).toBe(1);
            expect(Math.sign(1)).toBe(1);
            expect(Math.sign('1')).toBe(1);
        });
        it('Should returns an 0, whent it\'s zero', function () {
            expect(Math.sign(false)).toBe(0);
            expect(Math.sign('')).toBe(0);
            expect(Math.sign(null)).toBe(0);
            expect(Math.sign(0)).toBe(0);
            expect(Math.sign('0')).toBe(0);
        });
        it('Should returns an -1, when it\'s negative', function () {
            expect(Math.sign(-2)).toBe(-1);
            expect(Math.sign('-2')).toBe(-1);
            expect(Math.sign(-Infinity)).toBe(-1);
        });
        
     })
});
