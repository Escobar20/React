import { Scope } from '../../public/src/session-1'


describe('Scope', function () {
    describe('With variables', function () {
        it('"foo" variable should be reached, since it\'s shared from excercise file', function () {
            expect(Scope.foo).toBeDefined();
        });
        describe('Let\'s create a local variable (var) that caches the shared "foo" variable', function () {
            var foo = Scope.foo;

            it('Cached variable should equals to shared one', function () {
                expect(foo).toEqual(Scope.foo);
            })

            it('If we alter the cache variable, they won\'t be equal anymore', function () {
                foo = 5;
                expect(foo).not.toEqual(Scope.foo);
            });

            it('If we create a local variable (let) that caches shared "foo", we can preserve it\'s value', function () {
                expect(foo).not.toEqual(Scope.foo);

                let foo = Scope.foo;
                expect(foo).toEqual('');
            })

        });
        describe('Let\'s create a local variable (let) that caches the shared "foo" variable', function () {
            let foo = Scope.foo;

            it('Cached variable should equals to shared one', function () {
                expect(foo).toEqual(Scope.foo);
            })

            it('If we alter the cache variable, they won\'t be equal anymore', function () {
                foo = 5;
                expect(foo).not.toEqual(Scope.foo);
            });
            
            it('If we create a local variable (let) that caches shared "foo", we can preserve it\'s value', function () {
                expect(foo).not.toEqual(Scope.foo);
                
                let foo = Scope.foo;
                expect(foo).toEqual('');
            })
            
            
        });
    })
    
    /*/
    describe('Scope with block functions', function () {
        it('You can create a scope by adding block statements within braces', function () {
            {
                let foo = '';
            }
            expect(foo).not.toBeDefined();
        })
        it('You can create two foo variables, and differentiate them by the scope', function () {
            let foo = 5;
            {
                let foo = Scope.foo;
                expect(foo).toEqual(Scope.foo);
            }
            expect(foo).not.toEqual(Scope.foo);
        })
    });
    describe('But what you should not do, it\'s not take care of the variable\'s declaration', function () {
        const customError = new Error('Don\'t declare two variables at same scope ');
        it('Just like this', function () {
            function test() {
                try {
                    let foo = Scope.foo;
                    expect(foo).toEqual('');

                    let foo = Scope.foo;
                    expect(foo).toEqual('');
                } catch (e) {
                    throw customError;
                }
            }
            expect(test).toThrow(customError);
        })

    })
    /*/
});

