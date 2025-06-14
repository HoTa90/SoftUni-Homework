function ageDecorator(
	target: any,
	methodName: string,
	descriptor: PropertyDescriptor
) {
	let originalMethod = descriptor.set;

	descriptor.set = function (val: number) {
		if (val < 1 || val > 200) {
			throw new Error("Age must be between 1 and 200");
		}

		return originalMethod?.call(this, val);
	};
}

class Age {
	private _age!: number;
	constructor(age: number) {
		this.age = age;
	}

	@ageDecorator
	set age(val: number) {
		this._age = val;
	}
	get age() {
		return this._age;
	}
}

let ageVal = new Age(10);
ageVal.age = 20;
console.log(ageVal.age);
