abstract class Shape {
	color: string;

	constructor(color: string) {
		this.color = color;
	}

	abstract getArea(): number;
}

class Circle extends Shape {
	radius: number;
	constructor(color: string, radius: number) {
		super(color);
		this.radius = radius;
	}

	getArea(): number {
		return Math.PI * this.radius ** 2;
	}
}

class Rectangle extends Shape {
	sideA: number;
	sideB: number;

	constructor(color: string, a: number, b: number) {
		super(color);
		this.sideA = a;
		this.sideB = b;
	}

	getArea(): number {
		return this.sideA * this.sideB;
	}
}

const circle = new Circle("red", 5);
console.log(circle.getArea());

const rectangle = new Rectangle("blue", 4, 6);
console.log(rectangle.getArea());
