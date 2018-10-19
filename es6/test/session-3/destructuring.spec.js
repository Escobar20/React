import { Destructuring } from '../../public/src/session-3/';

describe('Destructuring', function () {
    it('Should exists destructured object', function () {
        expect(Destructuring).toBeDefined();
    });

    
    describe('Array matching', function () {
        it('Should assign first element value into a variable', function () {
            let [first,] = Destructuring.arr;
            expect(first).toEqual(Destructuring.arr[0]);
        })
        it('Should assign the middle element value into a variable', function () {
            let [, , third] = Destructuring.arr;
            expect(third).toEqual(Destructuring.arr[2]);
        })
        it('Should assign last element value into a variable', function () {
            let [, , , , last] = Destructuring.arr;
            expect(last).toEqual(Destructuring.arr[4]);
        })
    })

    describe('Array matching with default', function () {
        it('Should destructure a date string into year, month & day', function () {
            let [, day, month, year=1900] = Destructuring.date.regex.exec(Destructuring.date.val);
            expect(Number(day)).toEqual(1);
            expect(Number(month)).toEqual(10);
            expect(Number(year)).toEqual(1900);
        });
    });

    describe('Object matching', function () {
        it('Should extract id propertry value into id', function () {
            let { id } = Destructuring.obj;
            expect(id).toEqual(Destructuring.obj.id);
        });
        it('Should extract gender & first_name property value into gender & first_name', function () {
            let { gender, first_name } = Destructuring.obj;
            expect(gender).toEqual(Destructuring.obj.gender);
            expect(first_name).toEqual(Destructuring.obj.first_name);
        });
    })

    describe('Object matching defaults', function () {
        it('Should assign last_name as default to Perez', function () {
            let { last_name = 'Perez' } = Destructuring.obj;
            expect(last_name).toEqual('Perez'); 
        });
    });
});
