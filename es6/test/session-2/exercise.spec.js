import { Exercise } from "../../public/src/session-2";

describe('Exercise 2', function () {
    describe('Calculate the standard deviation from a sample of numbers; use: arrow functions, rest parameters and re-use average or sum functions if you\'d like', function () {
        it('Should exists their method', function () {
            expect(Exercise.standardDeviation).toBeDefined();
        });
        it('With no elements should returns a zero', function () {
            expect(Exercise.standardDeviation()).toBe(0);
            expect(Exercise.standardDeviation(0)).toBe(0);
        });
        it('Should calculate the standard deviation', function () {
            const sample = [1, 2, 3, 6];
            const sd = Exercise.standardDeviation(...sample);
            expect(Number(sd.toFixed(2))).toBe(1.87);
        })
    })
    describe('Create a select function that receives a callback that will act as where clause; implement a where clause that uses endsWith, startsWith, isNaN and isFinite', function () {
        it('Should exists their method', function () {
            expect(Exercise.select).toBeDefined();
        })
        it('Where clause using startsWith', function () {
            expect(Exercise.select(
                Exercise.sports, Exercise.clauses.startsWith('b')
            )).toEqual(['basketball', 'baseball'])
        })

        it('Where clause using endsWith', function () {
            expect(Exercise.select(
                Exercise.sports, Exercise.clauses.endsWith('ball')
            )).toEqual(['football', 'basketball', 'baseball', 'voleyball'])
        })
        it('Where clause using isNaN', function () {
            expect(Exercise.select(
                Exercise.numbers, Exercise.clauses.isNaN
            )).toEqual(['f', {}, NaN])
        })
        it('Where clause using isFinite', function () {
            expect(Exercise.select(
                Exercise.numbers, Exercise.clauses.isFinite
            )).toEqual([0])
        })

    })
})