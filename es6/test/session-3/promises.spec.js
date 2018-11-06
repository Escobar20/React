import { Promises } from '../../public/src/session-3';

describe('Promises', function () {
    it('Should exists', function () {
        expect(Promises).toBeDefined();
    })
    describe('Simple promises', function () {
        it('Should execute a promise succesfully', function (done) {
            spyOn(Promises, 'onDelay');

            let promise = Promises.delay(10);
            promise.then(Promises.onDelay);
            
            promise.then(function () {
                expect(Promises.onDelay).toHaveBeenCalled();
                done();
            })
        })

        it('Should execute fail a promise', function (done) {
            spyOn(Promises, 'onFailure');

            let promise = Promises.failDelay(10);
            promise.catch(Promises.onFailure);

            promise.catch(function () {
                expect(Promises.onFailure).toHaveBeenCalled();
                done();
            })
        })
    })
    describe('Racing', function () {

        it('Should finish race when one promise has been completed', function (done) {
            let competitors = ['John Doe', 'Uncle Steve', 'Larry King', 'Elton John']

            Promise.race(
                competitors.map(name => Promises.createRacer(name))
            ).then(function (winner) {
                expect(competitors).toContain(winner);
                done();
            });
        })
        it('Should finish race when one promise has failed first over all', function (done) {
            let competitors = ['John Doe', 'Uncle Steve', 'Larry King', 'Elton John']

            Promise.race(
                [Promises.createIneptRacer('Cruz azul'), ...competitors.map(name => Promises.createRacer(name))]
            ).catch(function ({ message: looser }) {
                expect(looser).toEqual('Cruz azul');
                done();
            });
        })

    })

    describe('All', function () {
        it('Should finish when all the promises has been completed', function (done) {
            let competitors = ['John Doe', 'Uncle Steve', 'Larry King', 'Elton John']

            let competition = Promise.all(
                competitors.map(name => Promises.createRacer(name))
            )
            competition.then((winners) => {
                expect(winners).toEqual(competitors);
                done();
            });
        })
        it('Should finish when some promises has failed', function (done) {
            let competitors = ['Uncle Steve', 'Larry King', 'Elton John']

            let competition = Promise.all(
                [...competitors.map(name => Promises.createRacer(name)), Promises.createIneptRacer('John Doe') ]
            )
            competition.catch(({ message: looser }) => {
                expect(looser).toBe('John Doe');
                done();
            });
        })
    })
})