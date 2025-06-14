function log(target: any, methodName: string, descriptor: PropertyDescriptor) {
	let method = descriptor.value;

	descriptor.value = function (...args: any[]) {
		console.log(
			`Function ${methodName} called with arguments: ${args.join(", ")}`
		);
		return method(...args);
	};
}

class Person {
	public fName: string;
	public lName: string;

	constructor(fName: string, lName: string) {
		this.fName = fName;
		this.lName = lName;
	}

	@log
	static getFullName(firstName: string, lastName: string): string {
		return `${firstName} ${lastName}`;
	}
}

let person = new Person("John", "Does");
Person.getFullName(person.fName, person.lName);
Person.getFullName("Benny", "Tres");
