let names = {
  fName: 'John',
  lName: 'Doe',
  age: 22,
  getPersonInfo() {
    return `${this.fName} ${this.lName}, age ${this.age}`;
  },
};

let location1 = {
  city: 'Boston',
  street: 'Nowhere street',
  number: 13,
  postalCode: 51225,
  getAddressInfo() {
    return `${this.street} ${this.number}, ${this.city} ${this.postalCode}`;
  },
};

type namesType = typeof names;
type locationType = typeof location1;

function createCombinedFunction(names: namesType, location: locationType) {
  return function (combined: namesType & locationType): void {
    console.log(`Hello, ${combined.getPersonInfo()} from ${combined.getAddressInfo()}`);
  };
}

let combinedFunction = createCombinedFunction(names, location1);
let combinedPerson = Object.assign({}, names, location1);
combinedFunction(combinedPerson);
