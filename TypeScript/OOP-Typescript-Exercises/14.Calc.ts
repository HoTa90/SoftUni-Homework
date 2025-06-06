
class Calculator {
	calculate(operation: "power" | "log", a: number, b: number): number;
	calculate(
		operation: "add" | "subtract" | "multiply" | "divide",
		a: number,
		b: number,
		c?: number,
		d?: number
	): number;
    calculate(operation: "power" | "log" | "add" | "subtract" | "multiply" | "divide", a: number, b:number, c?: number, d?:number){
        let validNums = [a, b, c, d].filter(el => el !== undefined);
        switch(operation){
            case "power": return a**b; 
            case "log": return Math.log(a) / Math.log(b);
            case "add": return validNums.reduce((acc, el) => acc + el);
            case "subtract": return validNums.reduce((acc, el) => acc - el);
            case "multiply": return validNums.reduce((acc, el) => acc * el);
            case "divide": return validNums.reduce((acc, el) => acc / el);
        }
    }
}

const calc = new Calculator();
console.log(calc.calculate('power', 2, 3));
console.log(calc.calculate('power', 4, 1/2));
console.log(calc.calculate('log', 8, 2));
console.log(calc.calculate('add', 10, 5));
console.log(calc.calculate('add', 10, 5, 3));
console.log(calc.calculate('subtract', 10, 5));
console.log(calc.calculate('multiply', 2, 3, 4));
console.log(calc.calculate('divide', 100, 5, 2, 2));

// console.log(calc.calculate('power', 2, 3, 2));
// console.log(calc.calculate('add', 2));
// console.log(calc.calculate('log', 2, 3, 4, 5)); 
// console.log(calc.calculate('multiply', 2, 3, 4, 5, 6));

