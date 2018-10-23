function _Shape(length) {
    this.length = length;
}
_Shape.prototype.calculateArea = function () { }
_Shape.prototype.calculatePerimeter = function () { }

export const Shape = _Shape;

function _Square(length) { _Shape.call(this, length); }
_Square.prototype = Object.create(_Shape.prototype);
_Square.prototype.calculatePerimeter = function () {
    return this.length * this.length;
}
_Square.prototype.calculateArea = function () {
    return 4 * this.length;
}
export const Square = _Square;

function _RightTriangle(base = 3, height = 4) {
    Shape.call(base);
    this.height = height;
}
_RightTriangle.prototype = Object.create(_Shape.prototype);
_RightTriangle.prototype.calculateArea = function () {
    return this.length * this.height / 2;
}
_RightTriangle.prototype.calculatePerimeter = function () {
    return this.length + this.height + (Math.sqrt(Math.pow(this.height, 2) + Math.pow(this.length, 2)))
}
export const RightTriangle = _RightTriangle;

export const ShapeFactory = {
    createShape(name, ...params) {
        switch (name) {
            case 'triangle':
                return new _RightTriangle(...params);
            case 'square':
                return new _Square(...params);
        }
        return new _Shape(...params);
    }
}