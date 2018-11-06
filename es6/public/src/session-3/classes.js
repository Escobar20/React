export class Shape {
    constructor(length) {
        this.length = length;
    }
    calculateArea() {  }
    calculatePerimeter() {  }
}

export class Square extends Shape {
    constructor(length = 4) {
        super(length);
    }
    calculateArea() { return 4 * this.length }
    calculatePerimeter() { return this.length * this.length }
}

export class RightTriangle extends Shape {
    constructor(base = 3, height = 4) {
        super(base);
        this.height = height;
    }
    calculateArea() { 
        return this.length * this.height / 2; 
    }
    calculatePerimeter() {
        return this.length + this.height + (Math.sqrt(Math.pow(this.height, 2) + Math.pow(this.length, 2)))
    }
}

export class ShapeFactory {
    static createShape(name, ...params) {
        switch(name) {
            case 'triangle':
                return new RightTriangle(...params);
            case 'square':
                return new Square(...params);
        }
        return new Shape(...params);
    }
}