import { Session1 } from '../../public/src/index';

describe('Constants', function () {
    /*/
    it('Should not be modifiable', function () {
        expect(function () {
            try {
                Session1.Constants.foo = '2';
            } catch(e) {
                throw new Error();
            }
        }).toThrow();
    });
    /*/

    describe('Could be modifiable', function () {
        it('Object properties could be modifiable', function () {
            let oldValue = Session1.Constants.bar.xfz;
            Session1.Constants.bar.xfz = 0;
            expect(oldValue).not.toEqual(Session1.Constants.bar.xfz);
        })
        it('Array items could be modifiable', function () {
            let oldValue = Session1.Constants.xfz.slice(0);
            Session1.Constants.xfz[1] = true;
            expect(oldValue).not.toEqual(Session1.Constants.xfz);
        });
        /*/
        it('But if you assign a different instance, raises an error', function () {
            expect(function () {
                try {
                    Session1.Constants.xfz = '';
                } catch (e) {
                    throw new Error();
                }
            }).toThrow();
        })
        /*/
    });
});