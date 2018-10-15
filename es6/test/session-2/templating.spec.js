import { Templating } from "../../public/src/session-2";


describe('Templating', function () {
    describe('Interpolation', function () {
        it('You can output variables like template engine', function () {
            expect(`I salute you, ${Templating.title}`).toBe('I salute you, captain');
        })
        it('Template strings within a function', function () {
            expect(Templating.salute(Templating.title)).toBe('I salute you, captain');
        })
        it('Template strings within an object function', function () {
            expect(Templating.coordinate.getPosition()).toBe('(0,0)');
        })
    })
    describe('Multi-line string', function () {
        it('You can create a large string by enclosing on backticks or using a backslash in eol', function () {
            expect(`Lorem
            ipsum
            `).toMatch(/Lorem|ipsum/)

            expect('Lorem \
            ipsum').toMatch(/Lorem|ipsum/)
        })
    })
    describe('Tag templating', function () {
        describe('The tag fn is invoked with the raw string without template variables and the spreaded variables input', function () {
            it('Creates an html for quotes', function () {
                expect(Templating.quoting`${'Dummy'} - ${'John Doe'}`).toBe(`<p><q>Dummy</q> - <cite>John Doe</cite></p>`);
            })
        })
    });
})