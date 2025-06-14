export {};

class MockCensorService<T extends { [key: string]: any }> {
	constructor(private censoredProperties: string[]) {}

	censorProperties(items: T[]) {
		let censoredItems = items.slice();
		censoredItems.forEach((i) => {
			this.censoredProperties.forEach((prop) => {
				delete i[prop];
			});
		});

		return censoredItems;
	}
}

let userCensorService = new MockCensorService<User>(["creditCardNumber"]);
let employeeCensorService = new MockCensorService<Employee>([
	"birthday",
	"salary",
]);

function addCreatedOn<T extends { new (...args: any[]): {} }>(constructor: T) {
	return class extends constructor {
		createdOn = new Date();
	};
}

function getLatest(seconds: number) {
	return function (
		target: any,
		property: string,
		descriptor: PropertyDescriptor
	) {
		let originalMethod = descriptor.value;
		descriptor.value = function () {
			const allUsers = originalMethod.call(this);
			const currentDate = new Date();
			const filteredUsers = allUsers.filter(
				(i: any) =>
					currentDate.getTime() - i.createdOn.getTime() <=
					seconds * 10000
			);
			return filteredUsers;
		};
	};
}

function censorItems<T extends { [key: string]: any }>(
	service: MockCensorService<T>
) {
	return function (
		target: any,
		property: string,
		descriptor: PropertyDescriptor
	) {
		const originalMethod = descriptor.value;
		descriptor.value = function () {
			const allItems = originalMethod.call(this);
			const censored = service.censorProperties(allItems);
			return allItems;
		};
	};
}

function log(target: any, property: string, descriptor: PropertyDescriptor) {
	const originalMethod = descriptor.value;
	descriptor.value = function () {
		console.log(`Method ${property} called successfully`);
		return originalMethod.call(this);
	};
}

@addCreatedOn
class User {
	constructor(
		public name: string,
		public age: number,
		public creditCardNumber: string
	) {}

	getInfo() {
		return `${this.name}, Age: ${this.age} CreditCardNumber: ${this.creditCardNumber}`;
	}
}
@addCreatedOn
class Employee {
	constructor(
		public name: string,
		public birthday: Date,
		public salary: number
	) {}

	getInfo() {
		return `${
			this.name
		}, Birthday: ${this.birthday?.toLocaleDateString()} Salary: ${
			this.salary
		}`;
	}
}

class UsersService {
	private _users: User[];
	private _employees: Employee[];
	constructor(users: User[], employees: Employee[]) {
		this._users = users;
		this._employees = employees;
	}

	addUser(user: User) {
		this._users.push(user);
	}
	addEmployee(employee: Employee) {
		this._employees.push(employee);
	}
	@getLatest(5)
	@censorItems(userCensorService)
	getUsers() {
		return this._users;
	}
	@getLatest(10)
	@censorItems(employeeCensorService)
	@log
	getEmployees() {
		return this._employees;
	}
}

const user1 = new User("John Does", 30, "ABCD-1234");
const user2 = new User("Benny Tres", 23, "EFGH-5678");
const emp1 = new Employee("Sarah Connor", new Date(1964, 4, 15), 2500);
const emp2 = new Employee("Arnold Schwarzenegger", new Date(1947, 6, 30), 3500);
let usersService = new UsersService([user1, user2], [emp1, emp2]);
let users = usersService.getUsers();
console.log(users.map((x) => x.getInfo()));
let employees = usersService.getEmployees();
console.log(employees.map((x) => x.getInfo()));

//7 seconds later
setTimeout(() => {
	const user3 = new User("Jimmy Quatro", 27, "IJKL-9012");
	const emp3 = new Employee("Kyle Reese", new Date(2004, 0, 1), 2000);
	usersService.addUser(user3);
	usersService.addEmployee(emp3);
	let users = usersService.getUsers();
	console.log(users.map((x) => x.getInfo()));
	let employees = usersService.getEmployees();
	console.log(employees.map((x) => x.getInfo()));
}, 7000);

//15 seconds later
setTimeout(() => {
	let users = usersService.getUsers();
	console.log(users.map((x) => x.getInfo()));
	let employees = usersService.getEmployees();
	console.log(employees.map((x) => x.getInfo()));
}, 15000);
