"use strict";
class Shape {
    color;
    constructor(color) {
        this.color = color;
    }
}
class Circle extends Shape {
    radius;
    constructor(color, radius) {
        super(color);
        this.radius = radius;
    }
    getArea() {
        return Math.PI * this.radius ** 2;
    }
}
class Rectangle extends Shape {
    sideA;
    sideB;
    constructor(color, a, b) {
        super(color);
        this.sideA = a;
        this.sideB = b;
    }
    getArea() {
        return this.sideA * this.sideB;
    }
}
const circle = new Circle("red", 5);
console.log(circle.getArea());
const rectangle = new Rectangle("blue", 4, 6);
console.log(rectangle.getArea());
//# sourceMappingURL=09.Abstract-Class.js.map