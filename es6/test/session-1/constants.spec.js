import { Constants } from '../../public/src/session-1';

describe('Constants', function () {
    /*/
    it('Should not be modifiable', function () {
        expect(function () {
            try {
                Constants.foo = '2';
            } catch(e) {
                throw new Error();
            }
        }).toThrow();
    });
    /*/

    describe('Could be modifiable', function () {
        it('Object properties could be modifiable', function () {
            let oldValue = Constants.bar.xfz;
            Constants.bar.xfz = 0;
            expect(oldValue).not.toEqual(Constants.bar.xfz);
        })
        it('Array items could be modifiable', function () {
            let oldValue = Constants.xfz.slice(0);
            Constants.xfz[1] = true;
            expect(oldValue).not.toEqual(Constants.xfz);
        });
        /*/
        it('But if you assign a different instance, raises an error', function () {
            expect(function () {
                try {
                    Constants.xfz = '';
                } catch (e) {
                    throw new Error();
                }
            }).toThrow();
        })
        /*/
    });
});