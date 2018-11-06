import { Shape, Square, RightTriangle, ShapeFactory } from '../../public/src/session-3/classes';

//import { Shape, Square, RightTriangle, ShapeFactory  } from '../../public/src/session-3/classes.pojo';

describe('Classes', function () {
    let square, triangle;

    const SQUARE_LENGTH = 4, TRIANGLE_BASE = 3, TRIANGLE_HEIGHT = 4;
    
    beforeAll(function () {
        triangle = new RightTriangle(TRIANGLE_BASE, TRIANGLE_HEIGHT), square = new Square(SQUARE_LENGTH);
    })

    describe('Shape class', function () {

        it('Should exists Shape class', function () {
            expect(Shape).toBeDefined();
        })
        it('Should have length property defined', function () {
            expect(Shape.length).toBeDefined();
        })
        it('Should have calculatePerimeter property defined', function () {
            expect(Shape.prototype.calculatePerimeter).toBeDefined();
        })
        it('Should have calculateArea property defined', function () {
            expect(Shape.prototype.calculateArea).toBeDefined();
        })
    })
    describe('Square class', function () {
        it('Should have length', function () {
            expect(square.length).toBeDefined();
        })
        it('Should calculate perimeter', function () {
            expect(square.calculatePerimeter()).toBe(4 * SQUARE_LENGTH);
        })
        it('Should calculate area', function () {
            expect(square.calculateArea()).toBe(Math.pow(SQUARE_LENGTH, 2));
        })
    })
    describe('Triangle class', function () {
        it('Should have base', function () {
            expect(triangle.length).toEqual(TRIANGLE_BASE);
        })
        it('Should have height', function () {
            expect(triangle.height).toEqual(TRIANGLE_HEIGHT);
        })
        it('Should calculate area', function () {
            expect(triangle.calculateArea()).toEqual((TRIANGLE_BASE * TRIANGLE_HEIGHT) / 2);
        })
        it('Should calculate perimeter', function () {
            expect(triangle.calculatePerimeter()).toEqual(12);
        })
    })
    describe('Shape Factory', function () {
        it('Should have the createShape method', function () {
            expect(ShapeFactory.createShape).toBeDefined();
        })
        it('Should create a triangle with 3 as base and 4 as height', function () {
            const newTriangle = ShapeFactory.createShape('triangle', 3, 4);
            expect(newTriangle.length).toBe(3);
            expect(newTriangle.height).toBe(4);
        })
        it('Should create a square with 4 as length', function () {
            const newSquare = ShapeFactory.createShape('square', 4);
            expect(newSquare.length).toBe(4);
        })
    })
})